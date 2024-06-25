'use client'

import { PizzaContext } from "@/providers/pizzas"
import { store } from "@/store"
import React, { useContext, useEffect } from "react"
import { PizzaCard } from "../product"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const Menu = () => {
    const {getPizzas} = useContext(PizzaContext)
    const { pizzas } = store(({pizzas}) => ({ pizzas }))
    useEffect(() => {
        getPizzas()
    },[])

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    if(pizzas === null) return null

    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true
                }}
                plugins={[plugin.current]}
                orientation="horizontal"
                className="w-full mb-[5rem]"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                    {
                        pizzas.map((pizza, index) => (
                            <div key={index} className="py-3 max-w-full flex items-center justify-center md:basis-1/3 gap-[5rem]">
                                <PizzaCard pizza={pizza}/>
                            </div>
                        ))
                    }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
        </>
    )
}