import { CreatePizzaDto } from './dto/create-pizza.dto';
import { PizzasService } from './pizzas.service';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pizzas')
@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzaService: PizzasService) {}

  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto[]) {
    return this.pizzaService.createAll(createPizzaDto);
  }

  @Get()
  findAll() {
    return this.pizzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzaService.remove(id);
  }
  @Delete()
  destroy() {
    return this.pizzaService.destroy();
  }
}
