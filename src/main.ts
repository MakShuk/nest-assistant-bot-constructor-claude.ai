import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel } from '@nestjs/common';
import { Logger } from 'tslog';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'] as LogLevel[],
  });
  await app.listen(2001);
  new Logger().info(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
