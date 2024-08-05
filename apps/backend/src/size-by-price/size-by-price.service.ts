import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SizeByPrice } from './entities/size-by-price.entity';
import { SizeByPriceDto } from './dto/create-size-by-price.dto';
import { Model } from 'mongoose';

@Injectable()
export class SizeByPriceService {
  constructor(
    @InjectModel(SizeByPrice.name) private sizeByPriceModel: Model<SizeByPrice>,
  ) {}

  createAll(createSizeByPriceDto: SizeByPriceDto[]) {
    try {
      const sizeByPrice =
        this.sizeByPriceModel.insertMany(createSizeByPriceDto);
      return sizeByPrice;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  findAll() {
    return this.sizeByPriceModel.find();
  }
}
