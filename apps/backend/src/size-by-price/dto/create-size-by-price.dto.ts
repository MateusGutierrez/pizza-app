import { ApiProperty } from '@nestjs/swagger';

export class SizeByPriceDto {
  @ApiProperty()
  size: string;
  @ApiProperty()
  price: number;
}
