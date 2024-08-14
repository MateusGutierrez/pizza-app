"use client"

import React, { useContext, useEffect, useMemo } from "react"
import { PizzaContext } from "@/providers/pizzas"
import { store } from "@/store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { CartComponent } from "../cart"
import { SelectForm } from "./selectForm/form"
import { ShoppingCart } from "lucide-react"


export default function OrderComponent() {
  const { getSizesByPrices } = useContext(PizzaContext)
  const {  order, removeOrder } = store(({  order, removeOrder }) => ({ order, removeOrder,
  }))
  const total = useMemo(() => {
    const flavor_value = order.reduce((acc, { price }) => acc + price, 0);
    const drink_value = order.reduce((acc, { drinks }) => acc + (drinks?.price ?? 0), 0);
    return (flavor_value + drink_value);
  }, [order]);
  
  useEffect(() => {
    getSizesByPrices()
  }, [])
  
  return (
    <div className="flex justify-between w-full">
      <div className="w-full">
        <Card className=" h-fit p-4 mt-8">
          <div className="flex justify-between items-center">
            <span className="mt-[2rem] text-4xl text-[#cd3c0c] text-start">Faça seu pedido personalizado</span>
          </div>
          <SelectForm/>
        </Card>
      </div>
      <div className="w-full">
        <ScrollArea className="max-h-[520px] flex flex-col mt-8 ml-4">
          <Card className="p-4 flex gap-2 items-center">
            <ShoppingCart/>
            <span className="text-2xl text-color5">Carrinho</span>
          </Card>
          <CartComponent orderList={order} removeOrder={removeOrder} />
        </ScrollArea>
        {total > 0 ? (
          <Card className="bg-color5 ml-4 mt-2 h-[60px] flex items-center justify-between p-4">
            <span className="text-secondary text-2xl">Total</span>
            <span className="text-secondary text-2xl">R$ {total.toFixed(2)}</span>
          </Card>
        ): null}
      </div>
    </div>
  )
}
