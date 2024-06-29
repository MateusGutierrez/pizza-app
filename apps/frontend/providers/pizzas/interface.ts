export interface Pizza {
    border: boolean;
    border_flavor?: string | null;
    flavor: string;
    flavor_image: string;
    price: string;
    size: string;
    __v: number;
    _id: string;
}  

export interface ContextProps {
    children: React.ReactNode;
}

export interface IPizzaContext {
    getPizzas: () => void;
}