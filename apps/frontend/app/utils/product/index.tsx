/* eslint-disable @next/next/no-img-element */
"use client"
 
import { ToastAction } from "@/components/ui/toast"
import {  useToast } from "@/components/ui/use-toast"
import styles from './Style.module.css'
import background from "../card/assets/background.jpeg"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { store } from '@/store'
import { Pizza } from "@/providers/pizzas/interface"


interface Props {
    pizza: Pizza
}

export const PizzaCard = ({pizza}: Props) => {
    const {addOrder, removeOrder} = store(({addOrder, removeOrder}) => ({addOrder, removeOrder}))
    const { toast } = useToast()
    return (
        <div className="px-[3rem]">
            <div className='flex flex-col gap-4'>
                <div className={styles.book}>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={background} alt={pizza.flavor} className="absolute w-[220px]  left-0 top-0 h-[220px] rounded-[50%] z-[-1]"/>
                        <h1 className="max-w-[50%] text-center text-xl font-bold text-gray-200 mt-1">{pizza.flavor}</h1>
                        <p className="max-w-[50%] text-[1rem] font-bold  text-gray-200" >{pizza.size}</p>
                        <p className="max-w-[50%] text-[1rem] font-bold  text-gray-200">R${pizza.price.toFixed(2)}</p>
                    </div>

                    <div className={styles.cover}>
                        
                        <img src={pizza.flavor_image} alt={pizza.flavor} className='w-full h-fit rounded-[50%]'/>
                    </div>
                </div>
                <Button 
                    onClick={() => { 
                        addOrder(pizza)
                        toast({
                            title: `Pizza adicionada ao carrinho!`,
                            description: `${pizza.flavor} `,
                            action: (
                              <ToastAction altText="Goto schedule to undo" onClick={() => removeOrder(pizza._id)}>Undo</ToastAction>
                            ),
                            
                          })
                    }} 
                >Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}