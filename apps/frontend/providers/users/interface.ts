import { TLoginFormValue } from "@/schemas/userSchema/login";
import { TRegisterFormValue } from "@/schemas/userSchema/register";

export interface User {
    email: string;
    name: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    _id: string | number;
    __v: number;
}

export interface LoggedUser {
    user: User;
    token: string;
}

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