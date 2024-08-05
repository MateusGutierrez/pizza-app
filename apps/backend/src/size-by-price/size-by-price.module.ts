import { Module } from '@nestjs/common';
import { SizeByPriceController } from './size-by-price.controller';
import { SizeByPriceService } from './size-by-price.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SizeByPrice,
  SizeByPriceSchema,
} from './entities/size-by-price.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SizeByPrice.name, schema: SizeByPriceSchema },
    ]),
  ],
  controllers: [SizeByPriceController],
  providers: [SizeByPriceService],
})
export class SizeByPriceModule {}
