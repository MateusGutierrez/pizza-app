import { Pizza } from "@/providers/pizzas/interface";
import { IUser } from "@/providers/users/interface";

export interface Store {
    user: IUser | null;
    pizzas: Pizza[] | null,
    addPizzas : (pizza: Pizza[]) => void;
}