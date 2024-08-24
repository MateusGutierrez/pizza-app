import { Pizza } from "@/providers/pizzas/interface";


export interface InputFormProps {
    pizzas: Pizza[] | null;
    setFilteredPizzas: (pizzas: Pizza[] | null) => void;
}