"use client"

import { CartComponent } from "@/app/utils/cart"
import calculate from "@/app/utils/order/selectForm/calculate"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { store } from "@/store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

export default function Cart() {
    const {order, removeOrder} = store(({order, removeOrder}) => ({order, removeOrder}))
    const total = useMemo(() => {
        return calculate(order)
    }, [order]);
    return (
        <div className="min-h-[80vh] w-[60%] flex m-auto justify-between items-start">
            <div className="w-full">
                <ScrollArea className="max-h-[520px] flex flex-col mt-8 ml-4 w-full">
                        <Card className="p-4 flex gap-2 items-center justify-between">
                            <div className="flex gap-4">
                                <ShoppingCart/>
                                <span className="text-2xl text-color5">Carrinho</span>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/ui/order">
                                    <Button>Fazer pedido personalizado</Button>
                                </Link>
                                <Link href="/ui/products">
                                    <Button>Cardápio</Button>
                                </Link>
                            </div>
                        </Card>
                        <CartComponent orderList={order} removeOrder={removeOrder} />
                </ScrollArea>
                {total > 0 ? (
                    <Card className="bg-color5 ml-4 mt-2 h-[60px] flex items-center justify-between p-4 w-full">
                        <span className="text-secondary text-2xl">Total</span>
                        <span className="text-secondary text-2xl">R$ {total.toFixed(2)}</span>
                    </Card>
                ): null}
            </div>
        </div>
    )
}