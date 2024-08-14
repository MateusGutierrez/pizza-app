import { z } from "zod";

export const FormSchema = z.object({
    flavorAndImage: z.object({
      flavor: z
        .string({
          required_error: "Por favor escolha um sabor.",
        }),
      image: z.string(),
    }),
    sizeByPrice: z.object({
        size: z.string({
          required_error: "Por favor escolha um tamanho.",
        }),
        price: z.number(),
      }),
    border: z.string({
        required_error: "Por favor escolha uma opção de borda.",
    }),
    drinks: z.object({
      drink: z.string(),
      price: z.number()
    }).nullable().optional()
})