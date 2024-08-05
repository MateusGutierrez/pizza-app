import { Test, TestingModule } from '@nestjs/testing';
import { SizeByPriceService } from './size-by-price.service';

describe('SizeByPriceService', () => {
  let service: SizeByPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizeByPriceService],
    }).compile();

    service = module.get<SizeByPriceService>(SizeByPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
