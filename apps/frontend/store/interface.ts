import {PizzaDto} from "@backend/pizzas/dto/create-pizza.dto"
import {SizeByPriceDto} from "@backend/size-by-price/dto/create-size-by-price.dto"
import {UserDto} from "@backend/users/dto/create-user.dto"
export interface Store {
    user: UserDto | null;
    pizzas: PizzaDto[] | null;
    order: PizzaDto[];
    sizeByPrice: SizeByPriceDto[] | null;
    addPizzas : (pizza: PizzaDto[]) => void;
    getUserByData: (user: UserDto) => void;
    getSizeByPrice: (sizeByPrice: SizeByPriceDto[]) => void;
    addOrder: (order: PizzaDto) => void;
    removeOrder: (id: number | string | undefined) => void;
}