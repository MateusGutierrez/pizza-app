import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pizza } from './entities/pizza.entity';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';

@Injectable()
export class PizzasService {
  constructor(@InjectModel(Pizza.name) private pizzaModel: Model<Pizza>) {}

  createAll(createPizzaDto: CreatePizzaDto[]) {
    try {
      const pizzas = this.pizzaModel.insertMany(createPizzaDto);
      return pizzas;
    } catch (error) {
      console.error('Error inserting pizzas: ', error);
      throw error;
    }
  }
  findAll() {
    return this.pizzaModel.find();
  }
  findOne(id: string) {
    return this.pizzaModel.findById(id);
  }
  update(id: string, updatePizzaDto: UpdatePizzaDto) {
    return this.pizzaModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatePizzaDto,
      },
      {
        new: true,
      },
    );
  }
  remove(id: string) {
    return this.pizzaModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
  destroy() {
    return this.pizzaModel.deleteMany()
  }
}
