import { Controller, Post } from '@nestjs/common';
import { ClaudeService } from './claude.service';

@Controller('claude')
export class ClaudeController {
  constructor(private readonly claudeService: ClaudeService) {}

  @Post()
  findAll() {
    return this.claudeService.findAll();
  }
}
