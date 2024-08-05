export interface Pizza {
    border?: boolean | null;
    border_flavor?: string | null;
    flavor: string;
    flavor_image: string;
    price: string | number;
    size: string;
    __v: number;
    _id: string | number;
}  

export interface ContextProps {
    children: React.ReactNode;
}

export interface Flavors {
    flavor: string;
    img: string;
}

export interface Borders {
    border: string
}
export interface sizesAndPrices {
    size: string;
    price: string;
}

export interface IPizzaContext {
    getPizzas: () => void;
    getSizesByPrices: () => void;
}