import { Pizza } from '@/providers/pizzas/interface';

const calculate = ((order: Pizza[]) => {
    const flavor_value = order.reduce((acc, { price }) => acc + price, 0);
    const drink_value = order.reduce((acc, { drinks }) => acc + (drinks?.price ?? 0), 0);
    return (flavor_value + drink_value); 
})

export default calculate;