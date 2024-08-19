import { TLoginFormValue } from "@/schemas/userSchema/login";
import { TRegisterFormValue } from "@/schemas/userSchema/register";


export interface ContextProps {
    children: React.ReactNode;
}
export interface Message{
    email: string;
    message: string
}
export interface IUserContext {
    login: (data: TLoginFormValue) => Promise<void>;
    signup: (data: TRegisterFormValue) => Promise<void>;
}