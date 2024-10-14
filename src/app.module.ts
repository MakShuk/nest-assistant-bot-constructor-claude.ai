import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './configs/openai.config';
import { ThreadsModule } from './threads/threads.module';
import { AssistantsModule } from './assistants/assistants.module';
import { VectorStoresModule } from './vector-stores/vector-stores.module';
import { UsersModule } from './users/users.module';
import { TelegramModule } from './configs/telegram.config';
import { TelegrafModule } from './telegraf/telegraf.module';
import { TelegrafService } from './telegraf/telegraf.service';
import { CommandsService } from './services/commands.service';
import { AssistantsService } from './assistants/assistants.service';
import { PrismaService } from './services/prisma.service';
import { OggConverter } from './services/ogg-converter.service';
import { VectorStoresService } from './vector-stores/vector-stores.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { InitializationService } from './services/Initialization.service';
import { FilesModule } from './files/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    OpenAIModule.forRootAsync(),
    TelegramModule.forRootAsync(),
    ThreadsModule,
    AssistantsModule,
    VectorStoresModule,
    UsersModule,
    TelegrafModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
    }),
    FilesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    TelegrafService,
    CommandsService,
    AppService,
    AssistantsService,
    TelegrafService,
    PrismaService,
    OggConverter,
    VectorStoresService,
    InitializationService,
  ],
})
export class AppModule {}
