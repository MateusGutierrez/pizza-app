import { Pizza, SizeByPrice } from "@/providers/pizzas/interface";
import { LoggedUser } from "@/providers/users/interface";
export interface Store {
    loggedUser: LoggedUser | null;
    pizzas: Pizza[] | null;
    order: Pizza[];
    sizeByPrice: SizeByPrice[] | null;
    token: string | null,
    addPizzas : (pizza: Pizza[]) => void;
    setAuthToken: (token: string) => void;
    saveUser: (user: LoggedUser) => void;
    logout: () => void;
    getSizeByPrice: (sizeByPrice: SizeByPrice[]) => void;
    addOrder: (order: Pizza) => void;
    removeOrder: (id: number | string | undefined) => void;
}