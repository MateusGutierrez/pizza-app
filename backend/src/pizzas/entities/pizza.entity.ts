import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PizzaDocument = HydratedDocument<Pizza>;

@Schema()
export class Pizza {
  @Prop()
  size: string;

  @Prop()
  flavor: string;

  @Prop()
  flavor_image: string;

  @Prop()
  border: boolean;

  @Prop()
  border_flavor?: string | null;

  @Prop()
  price: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
