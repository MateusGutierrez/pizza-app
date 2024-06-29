import { create } from 'zustand';
import { Store } from './interface';
import { Pizza } from '@/providers/pizzas/interface';
import { persist, createJSONStorage } from "zustand/middleware";

export const store = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            pizzas: null as Pizza[] | null,
            addPizzas: (pizzas: Pizza[]) => set({ pizzas }),
        }),
        {
            name: 'pizza-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
