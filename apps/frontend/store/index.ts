import { create } from 'zustand';
import { Store } from './interface';
import { Pizza } from '@/providers/pizzas/interface';
import { persist, createJSONStorage } from "zustand/middleware";
import {  IUserLoginResponse } from '@/providers/users/interface';

export const store = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            pizzas: null as Pizza[] | null,
            order: null,
            addPizzas: (pizzas: Pizza[]) => set({ pizzas }),
            getUserByData: (user: IUserLoginResponse) => set({user}),
        }),
        {
            name: 'session-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
