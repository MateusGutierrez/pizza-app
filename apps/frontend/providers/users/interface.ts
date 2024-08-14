import { TLoginFormValue } from "@/schemas/userSchema/login";
import { TRegisterFormValue } from "@/schemas/userSchema/register";

export interface ContextProps {
    children: React.ReactNode;
}

export interface IUserContext {
    login: (data: TLoginFormValue) => Promise<void>;
    register: (data: TRegisterFormValue) => Promise<void>;
    getUser: (id:string) => void;
}