'use client'
import { create } from 'zustand';
import { Store } from './interface';
import { Pizza, sizesAndPrices } from '@/providers/pizzas/interface';
import { persist, createJSONStorage } from "zustand/middleware";
import {  IUserLoginResponse } from '@/providers/users/interface';

export const store = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            pizzas: null as Pizza[] | null,
            order: [] as Pizza[], // Inicialize como array vazio
            sizeByPrice: null,
            addPizzas: (pizzas: Pizza[]) => set({ pizzas }),
            getUserByData: (user: IUserLoginResponse) => set({user}),
            getSizeByPrice: (sizeByPrice: sizesAndPrices[]) => set({ sizeByPrice }),
            addOrder: (newOrder: Pizza) => set((state) => ({
                order: [...state.order, newOrder] // Garante que state.order é um array
            })),
            removeOrder: (id: string | number) =>
                set((state) => ({
                    order: state.order.filter(pizza => pizza._id !== id) // Filtra pizzas pelo id
                })),
        }),
        {
            name: 'session-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
