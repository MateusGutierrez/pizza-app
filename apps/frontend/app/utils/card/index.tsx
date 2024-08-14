'use client'
import Image from "next/image"
import background from "./assets/background.jpeg"
import { Button } from "@/components/ui/button"
import { store } from "@/store"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import uuid4 from "uuid4";
import logo from "@/app/public/logoString"

export const Card = ({ title, price}: { title: string, price: number}) => {
    const {addOrder, removeOrder} = store(({addOrder, removeOrder}) => ({addOrder, removeOrder}))
    const uuid = uuid4();
    const { toast } = useToast()

    return (
        <div
            className="group flex flex-col justify-between items-start gap-2 max-w-full h-56 duration-500 relative rounded-lg p-4 bg-transparent hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
        >
            <Image src={background} alt={title} className="absolute left-0 top-0 h-56 max-w-full rounded-lg z-[1]"/>
            <div
                className="w-[40%] flex flex-col justify-center items-center absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-4 -right-4 h-1/3 rounded-lg bg-[#2d0000] z-[2]"    
            >
                <p className="z-[2] text-white font-bold p-2">R$ {price.toFixed(2)}</p>
            </div> 

            <div className="z-[2] h-full flex flex-col items-start justify-between">
                <h2 className="text-2xl font-bold mb-2 text-gray-200">{title}</h2>

            <Button
                className="hover:bg-[#84985c] bg-[#cad2aa] text-gray-800 mt-6 rounded p-2 px-6 z-[2]"
                onClick={() => { 
                    addOrder({_id: uuid, flavor: title, price: price, size: 'Promoção', flavor_image: logo , __v: price})
                    toast({
                        title: `Promo adicionada ao carrinho!`,
                        description: `${title}`,
                        action: (
                          <ToastAction altText="Goto schedule to undo" onClick={() => removeOrder(uuid)}>Undo</ToastAction>
                        ),
                      })
                }} 
            >
                Aproveitar 
            </Button>
            </div>
        </div>
    )
}