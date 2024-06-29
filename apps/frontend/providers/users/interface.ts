import { TLoginFormValue, TRegisterFormValue } from "@/schemas/userSchema";

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
    accessToken: string;
    user: IUser;
}

export interface IUserContext {
    login: (data: TLoginFormValue) => Promise<void>;
    register: (data: TRegisterFormValue) => Promise<void>;
    getUser: (id:string) => void;
}