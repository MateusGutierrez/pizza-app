import { Module } from '@nestjs/common';
import { PizzasController } from './pizzas.controller';
import { PizzasService } from './pizzas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pizza, PizzaSchema } from './entities/pizza.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
  ],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
