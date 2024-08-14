import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeByPriceModule } from './size-by-price/size-by-price.module';
import * as dotenv from 'dotenv';

dotenv.config();
const APY_KEY = process.env.MONGO_API_KEY;
@Module({
  imports: [
    MongooseModule.forRoot(
      APY_KEY,
    ),
    UsersModule,
    PizzasModule,
    SizeByPriceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
