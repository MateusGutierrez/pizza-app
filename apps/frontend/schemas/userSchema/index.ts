import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("O e-mail é obrigatório"),
  password: z
    .string()
    .min(1, "A senha é obrigatória"),
});

export type TLoginFormValue = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
    email: z.string().email("O e-mail é obrigatório"),
    name: z.string().email("O name é obrigatório"),
    password: z
      .string()
      .min(1, "A senha é obrigatória"),
  });

 export type TRegisterFormValue = z.infer<typeof RegisterSchema>