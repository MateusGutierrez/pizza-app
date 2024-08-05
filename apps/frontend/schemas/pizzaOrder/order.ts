import { z } from 'zod';

export const OrderSchema = z.object({
  border: z.boolean().nullable(),
  border_flavor: z.string().nullable(),
  flavor: z.array(z.string()),
  flavor_image: z.string(),
  price: z.union([z.string(), z.number()]),
  size: z.array(z.string()),
  drink: z.array(z.string()),
});


export const defaultOrderValues = {
  border: null,
  border_flavor: null,
  flavor: [],
  flavor_image: "",
  price: "",
  size: [],
  drink: []
};

export type OrderFormValue = z.infer<typeof OrderSchema>;
