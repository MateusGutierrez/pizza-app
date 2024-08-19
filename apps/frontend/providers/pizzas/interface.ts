export interface Pizza {
    size: string;
    flavor: string;
    flavor_image: string;
    border?: boolean;
    border_flavor?: string;
    price: number;
    drinks?: {
      drink: string | null;
      price: number | null;
    };
    _id: number | string;
    __v: number;
}

export interface SizeByPrice {
    size: string;
    price: number;
}
  
export interface ContextProps {
    children: React.ReactNode;
}
export interface IPizzaContext {
    getPizzas: () => void;
    getSizesByPrices: () => void;
}