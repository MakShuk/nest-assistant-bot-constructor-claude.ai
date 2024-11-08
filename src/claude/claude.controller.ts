import { Controller, Get } from '@nestjs/common';
import { ClaudeService } from './claude.service';

@Controller('claude')
export class ClaudeController {
  constructor(private readonly claudeService: ClaudeService) {}

  @Get()
  streamText() {
    return this.claudeService.streamText('Hello, Claude!');
  }
}
