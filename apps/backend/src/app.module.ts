import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeByPriceModule } from './size-by-price/size-by-price.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';

dotenv.config();
const APY_KEY = process.env.MONGO_API_KEY;
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
