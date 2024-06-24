import { create } from 'zustand'
import { Store } from './interface'
import { Pizza } from '@/providers/pizzas/interface'

export const store = create<Store>((set) => ({
    user: null,
    pizzas: null,
    addPizzas: (pizzas: Pizza[]) => set(() => ({pizzas: pizzas}))
}))