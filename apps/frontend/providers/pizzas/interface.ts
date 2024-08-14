export interface ContextProps {
    children: React.ReactNode;
}
export interface IPizzaContext {
    getPizzas: () => void;
    getSizesByPrices: () => void;
}