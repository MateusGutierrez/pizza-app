import { Controller, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('email-sender')
  emailSender(@Request() req) {
    return this.appService.emailSender(req.body);
  }
}
