export class CreatePizzaDto {
  size: string;
  flavor: string;
  flavor_image: string;
  border: boolean;
  border_flavor?: string | null;
  price: string;
}
