import {PizzaDto} from "@backend/pizzas/dto/create-pizza.dto"
import {SizeByPriceDto} from "@backend/size-by-price/dto/create-size-by-price.dto"
import { LoggedUser } from "@backend/users/dto/create-user.dto"
export interface Store {
    loggedUser: LoggedUser;
    pizzas: PizzaDto[] | null;
    order: PizzaDto[];
    sizeByPrice: SizeByPriceDto[] | null;
    token: string | null,
    addPizzas : (pizza: PizzaDto[]) => void;
    setAuthToken: (token: string) => void;
    saveUser: (user: LoggedUser) => void;
    logout: () => void;
    getSizeByPrice: (sizeByPrice: SizeByPriceDto[]) => void;
    addOrder: (order: PizzaDto) => void;
    removeOrder: (id: number | string | undefined) => void;
}