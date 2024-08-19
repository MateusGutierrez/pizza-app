import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeByPriceModule } from './size-by-price/size-by-price.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';

dotenv.config();
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const APY_KEY = process.env.MONGO_API_KEY;
const EMAIL_SENDER_SMTP_OUTLOOK = process.env.EMAIL_SENDER_SMTP_OUTLOOK;
const EMAIL_SENDER_PORT = Number(process.env.EMAIL_SENDER_PORT);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(APY_KEY),
    UsersModule,
    PizzasModule,
    SizeByPriceModule,
    AuthModule,
    MailerModule.forRoot({
      transport: {
        host: EMAIL_SENDER_SMTP_OUTLOOK,
        port: EMAIL_SENDER_PORT,
        secure: false,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      },
      defaults: {
        from: SMTP_USER,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
