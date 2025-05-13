import { Injectable } from '@nestjs/common';
import Anthropic from '@anthropic-ai/sdk';
import { HttpsProxyAgent } from 'https-proxy-agent';

@Injectable()
export class ClaudeService {
  claude: Anthropic;
  instruction: string;

  constructor() {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    const proxy = process.env.PROXY;
    const agent = proxy ? new HttpsProxyAgent(proxy) : null;
    const instruction = process.env.INSTRUCTION;

    if (!instruction) {
      throw new Error('No INSTRUCTION key provided');
    }

    if (!apiKey) {
      throw new Error('No ANTHROPIC_API_KEY key provided');
    }
    this.claude = new Anthropic({
      apiKey,
      httpAgent: agent,
    });
    this.instruction = instruction;
  }

  async streamText(message: string) {
    const stream = await this.claude.messages.create({
      max_tokens: 4096,
      temperature: 0,
      system: this.instruction,
      messages: [{ role: 'user', content: message }],
      model: 'claude-3-7-sonnet-20250219',
      stream: true,
    });
    return stream;
  }
}
