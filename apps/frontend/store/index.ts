'use client'
import { create } from 'zustand';
import { Store } from './interface';
import {SizeByPriceDto} from "@backend/size-by-price/dto/create-size-by-price.dto"
import { persist, createJSONStorage } from "zustand/middleware";
import {PizzaDto} from "@backend/pizzas/dto/create-pizza.dto"
import { UserDto } from '@backend/users/dto/create-user.dto';

export const store = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            pizzas: null as PizzaDto[] | null,
            order: [] as PizzaDto[], 
            sizeByPrice: null,
            addPizzas: (pizzas: PizzaDto[]) => set({ pizzas }),
            getUserByData: (user: UserDto) => set({user}),
            getSizeByPrice: (sizeByPrice: SizeByPriceDto[]) => set({ sizeByPrice }),
            addOrder: (newOrder: PizzaDto) => set((state) => ({
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
