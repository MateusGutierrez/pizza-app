import { LoginDto } from "@backend/auth/dto/login.dto";
import { SignUpDto } from "@backend/auth/dto/signup.dto";

export interface ContextProps {
    children: React.ReactNode;
}

export interface IUserContext {
    login: (data: LoginDto) => Promise<void>;
    signup: (data: SignUpDto) => Promise<void>;
}