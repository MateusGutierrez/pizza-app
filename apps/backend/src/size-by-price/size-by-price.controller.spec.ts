import { Test, TestingModule } from '@nestjs/testing';
import { SizeByPriceController } from './size-by-price.controller';

describe('SizeByPriceController', () => {
  let controller: SizeByPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizeByPriceController],
    }).compile();

    controller = module.get<SizeByPriceController>(SizeByPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
