export interface IPizza {
    email: string;
    name:string;
    password: string;
}

export interface ContextProps {
    children: React.ReactNode;
}

export interface IPizzaContext {
    getPizzas: () => void;
}