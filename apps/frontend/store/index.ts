'use client'
import { create } from 'zustand';
import { Store } from './interface';
import { persist, createJSONStorage } from "zustand/middleware";
import { Pizza, SizeByPrice } from '@/providers/pizzas/interface';
import { LoggedUser } from "@/providers/users/interface";

export const store = create<Store>()(
    persist(
        (set, get) => ({
            loggedUser: null,
            pizzas: null as Pizza[] | null,
            order: [] as Pizza[], 
            sizeByPrice: null,
            token: null,
            addPizzas: (pizzas: Pizza[]) => set({ pizzas }),
            setAuthToken: (token: string) => set({token}),
            saveUser: (loggedUser: LoggedUser) => set({ loggedUser }),
            logout: () => set({loggedUser: undefined, token: null}),
            getSizeByPrice: (sizeByPrice: SizeByPrice[]) => set({ sizeByPrice }),
            addOrder: (newOrder: Pizza) => set((state) => ({
                order: [...state.order, newOrder]
            })),
            removeOrder: (id: string | number | undefined) =>
                set((state) => ({
                order: state.order.filter(pizza => pizza._id !== id)
            })),
        }),
        {
            name: 'session-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
