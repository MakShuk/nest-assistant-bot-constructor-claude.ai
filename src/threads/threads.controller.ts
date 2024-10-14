import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';

@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) {}

  @Post(`:userId`)
  async createThread(@Param('userId') userId: string) {
    return await this.threadsService.createThread(userId);
  }

  @Get('thread/:threadId')
  async getThreadById(@Param('threadId') threadId: string) {
    return await this.threadsService.getThreadById(threadId);
  }

  @Get(`:userId`)
  async getAllUserThreads(@Param('userId') userId: string) {
    return await this.threadsService.getAllThreadsForUserId(userId);
  }

  @Delete(':threadId')
  async deleteThread(@Param('threadId') threadId: string) {
    return await this.threadsService.deleteThread(threadId);
  }

  @Post(`add-image/:openaiThreadId`)
  async addImageMessagesToThread(
    @Param('openaiThreadId') openaiThreadId: string,
    @Body() data: { message: string; fileId: string },
  ) {
    return await this.threadsService.addImageMessagesToThread(
      openaiThreadId,
      data.message,
      data.fileId,
    );
  }

  @Post(`:openaiThreadId/:message`)
  async addMessageToThread(
    @Param('openaiThreadId') openaiThreadId: string,
    @Param('message') message: string,
  ) {
    return await this.threadsService.addMessageToThread(
      openaiThreadId,
      message,
    );
  }
}
