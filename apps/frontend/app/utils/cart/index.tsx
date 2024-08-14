'use client'

import {PizzaDto} from "@backend/pizzas/dto/create-pizza.dto"
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { isEmpty } from "lodash";
import { ShoppingCart, Trash2Icon  } from "lucide-react";
import Image from "next/image";

interface Props {
    orderList: PizzaDto[];
    removeOrder: (id: number | string) => void;
}

export const EmptyCart = () => (
    <Card className="h-fit">
        <CardHeader>
            <div className="flex gap-3">
                <ShoppingCart/>
                Seu carrinho está vazio...
            </div>
        </CardHeader>
        <CardContent>
            <CardDescription>
                Por favor, adicione mais itens ao carrinho.
            </CardDescription>
        </CardContent>
    </Card>
)


export const CartComponent = ({orderList, removeOrder}: Props) => {
    
    if (isEmpty(orderList)) return <EmptyCart/>

    return orderList.map((order, index) => (
        <Card key={index} className="w-full">
            <CardHeader className="w-full">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between items-center w-full">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                                <Image src={order.flavor_image} alt="img" height={50} width={50} />
                                <span>{order.flavor}</span>
                            </div>
                            <span>R${order.price.toFixed(2)}</span>
                        </div>
                        {order.drinks ? (
                            <div className="flex justify-between items-center w-full mt-4">
                                <span>{order?.drinks?.drink}</span>
                                <span className="text-green-900">+ R${order?.drinks?.price}</span>
                            </div>
                        ): null}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex justify-between">
                    <span>Tamanho: {order.size}</span>
                    {order.border_flavor && <span>Borda: {order.border_flavor}</span>}
                    <Trash2Icon className="cursor-pointer" onClick={() => removeOrder(order._id)}/>
                </CardDescription>
            </CardContent>
        </Card>
    ))
}