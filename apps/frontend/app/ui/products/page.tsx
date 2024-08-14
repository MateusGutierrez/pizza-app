'use client'

import { PizzaCard } from "@/app/utils/product"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { store } from "@/store"
import Link from "next/link"
import { InputForm } from "./search"
import { useState } from "react"

export default function Products() {
    const {pizzas} = store(({pizzas}) => ({pizzas}))
    const [filteredPizzas, setFilteredPizzas] = useState(pizzas)
    return (
        <div className="min-h-[100vh] w-[90%] flex flex-col m-auto">
            <div className="flex justify-between items-center">
                <span className="my-[3rem] text-4xl text-[#cd3c0c]">CARDÁPIO</span>
                <div className="flex justify-between gap-4">
                    <Link href="/ui/order">
                        <Button>Fazer pedido personalizado</Button>
                    </Link>
                    <InputForm pizzas={pizzas} setFilteredPizzas={setFilteredPizzas}/>
                </div>
            </div>
            <div className="flex flex-wrap mb-2rem overscroll-auto md:basis-1/4 mb-[3rem]">
                {pizzas ? 
                    filteredPizzas?.map((pizza, index) => (
                        <div key={index} className="py-3 max-w-full flex items-center justify-center md:basis-1/4 gap-[5rem]">
                            <PizzaCard pizza={pizza}/>
                        </div>
                    )) : null
                }
            </div>
        </div>
    )
}