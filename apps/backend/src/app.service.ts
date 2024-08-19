import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailSenderDto } from './email-sender/email-sender.dto';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async emailSender(data: EmailSenderDto) {
    await this.mailerService.sendMail({
      to: data.email,
      from: 'mateusgutierrez9@gmail.com',
      subject: 'Aproveite as promoções da Di Nonna Pizzaria',
      html: `<div style="display: flex; flex-direction: column;" >${data.message}</div>`,
    });
  }
}
