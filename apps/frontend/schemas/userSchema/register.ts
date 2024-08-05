import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().email("O e-mail é obrigatório"),
    name: z.string().min(2,"O name é obrigatório"),
    password: z
      .string()
      .min(1, "A senha é obrigatória"),
  });

export const defaultRegisterValues = {
  email: "",
  name: "",
  password: ""
}

 export type TRegisterFormValue = z.infer<typeof RegisterSchema>