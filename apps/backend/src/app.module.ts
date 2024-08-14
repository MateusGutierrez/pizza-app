import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeByPriceModule } from './size-by-price/size-by-price.module';
import * as dotenv from 'dotenv';

dotenv.config();
const password = process.env.MONGO_PASSWORD;
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mateusgutierrez9:${password}@cluster0.ru8beul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
    UsersModule,
    PizzasModule,
    SizeByPriceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
