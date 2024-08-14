"use client"

import { CartComponent } from "@/app/utils/cart"
import { Card } from "@/components/ui/card"
import { store } from "@/store"
import { ShoppingCart } from "lucide-react"

export default function Cart() {
    const {order, removeOrder} = store(({order, removeOrder}) => ({order, removeOrder}))
    return (
        <div className="min-h-[80vh] w-[60%] flex m-auto justify-between items-start">
            <Card className="p-4 flex gap-2 items-center">
                <ShoppingCart/>
                <span className="text-2xl text-color5">Carrinho</span>
            </Card>
            <CartComponent orderList={order} removeOrder={removeOrder} />
        </div>
    )
}