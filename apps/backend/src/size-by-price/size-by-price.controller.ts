import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { SizeByPriceService } from './size-by-price.service';
import { SizeByPriceDto } from './dto/create-size-by-price.dto';

@Controller('size-by-price')
export class SizeByPriceController {
  constructor(private readonly sizeByPriceService: SizeByPriceService) {}

  @Post()
    create(@Body() sizeByPriceDto: SizeByPriceDto[]) {
      return this.sizeByPriceService.createAll(sizeByPriceDto);
    }

  @Get()
    findAll() {
      return this.sizeByPriceService.findAll();
    }
  @Delete()
    destroy() {
      return this.sizeByPriceService.destroy()
    }
}
