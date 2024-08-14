import { PizzaDto } from '@backend/pizzas/dto/create-pizza.dto';
import { useMemo } from 'react';

const calculate = ((order: PizzaDto[]) => {
    const flavor_value = order.reduce((acc, { price }) => acc + price, 0);
    const drink_value = order.reduce((acc, { drinks }) => acc + (drinks?.price ?? 0), 0);
    return (flavor_value + drink_value); 
})

export default calculate;