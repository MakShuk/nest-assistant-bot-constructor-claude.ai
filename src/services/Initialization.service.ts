import { Injectable } from '@nestjs/common';
import { AssistantsService } from 'src/assistants/assistants.service';
import { ThreadsService } from 'src/threads/threads.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class InitializationService {
  constructor(
    private readonly assistant: AssistantsService,
    private readonly thread: ThreadsService,
    private readonly user: UsersService,
  ) {}

  async on() {
    try {
      const users = await this.user.getAllUsers();
      const formattedDate = new Date()
        .toLocaleDateString('ru-RU')
        .slice(0, -5)
        .replace(/\./g, '.');

      const instruction = process.env.INSTRUCTION;
      const usersForSettings = process.env.USERS
        ? JSON.parse(process.env.USERS)
        : [];

      if (!users.length) {
        console.log('Creating user');
        await this.initializationUsers(usersForSettings);

        if (process.env.ASSISTANT_ID) {
          console.log(`Creating assistant with id ${process.env.ASSISTANT_ID}`);
          await this.assistant.createAssistant(
            formattedDate,
            instruction,
            process.env.ASSISTANT_ID,
          );
        } else {
          console.log(`Creating assistant with instruction ${instruction}`);
          await this.assistant.createAssistant(formattedDate, instruction);
        }
      }
    } catch (error) {
      console.error('Initialization error', error);
    }
  }

  private async initializationUsers(users: string[]) {
    try {
      for (const user of users) {
        const newUser = await this.user.createUser(user);
        await this.thread.createThread(newUser.telegramUserId);
      }
    } catch (error) {
      const errorMessage = `Initialization error: ${error}`;
      console.error(errorMessage);
      return { errorMessage };
    }
  }
}
