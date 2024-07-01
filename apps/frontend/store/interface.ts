import { Pizza } from "@/providers/pizzas/interface";
import { IUser, IUserLoginResponse } from "@/providers/users/interface";

export interface Store {
    user: IUser | null;
    pizzas: Pizza[] | null,
    order: null,
    addPizzas : (pizza: Pizza[]) => void;
    getUserByData: (user: IUserLoginResponse) => void;
}