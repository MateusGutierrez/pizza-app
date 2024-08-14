'use client'

import { CarouselOrientation } from "@/app/utils/carousels/MaxWidthCarousel"
import { Menu } from "@/app/utils/products"
import { Promos } from "@/app/utils/promos"
import { PizzaContext } from "@/providers/pizzas"
import { useContext, useEffect } from "react"

  
export default function Dashboard() {
    const {getPizzas} = useContext(PizzaContext)
    
    useEffect(() => {
        getPizzas()
    },[])

    return (
            <div className="min-h-[100vh] w-[90%] m-auto mb-2rem overscroll-auto">
                <CarouselOrientation />
                <Promos />
                <Menu />
            </div>
    )
}