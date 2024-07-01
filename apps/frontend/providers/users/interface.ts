import { TLoginFormValue } from "@/schemas/userSchema/login";
import { TRegisterFormValue } from "@/schemas/userSchema/register";

export interface IUser {
    email: string;
    name:string;
    password: string;
}

export interface ContextProps {
    children: React.ReactNode;
}

interface IUserTRegisterResponse {
    accessToken: string;
    user: IUser;
}

export interface IUserLoginResponse {
    _id: string;
    _v: string | number;
    email: string;
    name:string;
    password: string;
}

export interface IUserContext {
    login: (data: TLoginFormValue) => Promise<void>;
    register: (data: TRegisterFormValue) => Promise<void>;
    getUser: (id:string) => void;
}