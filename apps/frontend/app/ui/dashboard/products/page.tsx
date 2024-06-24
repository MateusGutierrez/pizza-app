'use client'

import { store } from "@/store"

export default function Products() {

    const {pizzas} = store(({pizzas}) => ({pizzas}))

    return (
        <div className="min-h-[100vh] w-[75%] m-auto mb-2rem overscroll-auto">
            
        </div>
    )
}