import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("O e-mail é obrigatório"),
  password: z
    .string()
    .min(1, "A senha é obrigatória"),
});

export const defaultLoginValues = {
  email: "",
  password: ""
}

export type TLoginFormValue = z.infer<typeof LoginSchema>;