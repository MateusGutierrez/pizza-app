import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SizeByPriceDocument = HydratedDocument<SizeByPrice>;

@Schema()
export class SizeByPrice {
  @Prop()
  size: string;

  @Prop()
  price: number;
}

export const SizeByPriceSchema = SchemaFactory.createForClass(SizeByPrice);
