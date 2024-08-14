export class CreatePizzaDto {
  size: string;
  flavor: string;
  flavor_image: string;
  border?: boolean;
  border_flavor?: string;
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
