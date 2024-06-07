import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PizzasModule } from './pizzas/pizzas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateusgutierrez9:h83ehnRzMCVZxdeq@cluster0.ru8beul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
    PizzasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
