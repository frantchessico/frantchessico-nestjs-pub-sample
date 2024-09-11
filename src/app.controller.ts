import { Controller, Post, Body } from '@nestjs/common';
import { PubSubService } from '@savanapoint/nestjs-pubsub';

@Controller('notifications')
export class AppController  {
  constructor(private readonly pubSubService: PubSubService) {}

  @Post('send')
  async sendNotification(
    @Body('channel') channel: string,
    @Body('message') message: string,
    @Body('subscribers') subscribers: string[],
  ): Promise<void> {
    await this.pubSubService.publish('my-channel-test', message, ['my-subscribe-test']);
  }
}