import { Pizza, sizesAndPrices } from "@/providers/pizzas/interface";
import { IUser, IUserLoginResponse } from "@/providers/users/interface";

export interface Store {
    user: IUser | null;
    pizzas: Pizza[] | null;
    order: Pizza[];
    sizeByPrice: sizesAndPrices[] | null;
    addPizzas : (pizza: Pizza[]) => void;
    getUserByData: (user: IUserLoginResponse) => void;
    getSizeByPrice: (sizeByPrice: sizesAndPrices[]) => void;
    addOrder: (order: Pizza) => void;
    removeOrder: (id: number | string) => void;
}