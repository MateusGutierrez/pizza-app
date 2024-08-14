import { PizzaDto } from "@backend/pizzas/dto/create-pizza.dto";

export interface InputFormProps {
    pizzas: PizzaDto[] | null;
    setFilteredPizzas: (pizzas: PizzaDto[] | null) => void;
}