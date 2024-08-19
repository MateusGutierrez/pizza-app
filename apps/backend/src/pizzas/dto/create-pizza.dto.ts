import { ApiProperty } from '@nestjs/swagger';

export class CreatePizzaDto {
  @ApiProperty()
  size: string;
  @ApiProperty()
  flavor: string;
  @ApiProperty()
  flavor_image: string;
  border?: boolean;
  @ApiProperty()
  border_flavor?: string;
  @ApiProperty()
  price: number;
}
export class PizzaDto extends CreatePizzaDto {
  drinks?: {
    drink: string | null;
    price: number | null;
  };
  _id: number | string;
  __v: number;
}
