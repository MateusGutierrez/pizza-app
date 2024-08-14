import { UseFormReturn } from "react-hook-form";

export interface FormProps {
    form: UseFormReturn<{
        flavorAndImage: {
          flavor: string;
          image: string;
        };
        sizeByPrice: {
            size: string;
            price: number;
        };
        border: string;
        drinks?: {
          drink: string;
          price: number;
        } | null;
    }, any, undefined>
}