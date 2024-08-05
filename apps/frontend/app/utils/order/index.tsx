"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { OrderFormValue, OrderSchema, defaultOrderValues } from "@/schemas/pizzaOrder/order"
import { PizzaContext } from "@/providers/pizzas"
import { store } from "@/store"
import { CustomSelect } from "./customSelect"
import { ScrollArea } from "@/components/ui/scroll-area"
import useSelections from "./customSelect/useSelections"

const borders = [
  {
    border_flavor: 'Cheddar', 
  },
  {
    border_flavor: 'Catupiry', 
  },
]

export default function OrderComponent() {
  const {getSizesByPrices} = useContext(PizzaContext)
  const { sizeByPrice, pizzas, addOrder, order } = store(({sizeByPrice, pizzas, addOrder, order}) => ({ sizeByPrice, pizzas, addOrder, order }))
  const flavors = pizzas?.map(pizza => ({flavor:  pizza.flavor, flavor_image: pizza.flavor_image}))

  const {
    selectedFlavor,
    setSelectedFlavor,
    selectedSize,
    setSelectedSize,
    selectedBorder,
    setSelectedBorder,
  } = useSelections();

  const form = useForm<z.infer<typeof OrderSchema>>({
    resolver: zodResolver(OrderSchema),
    defaultValues: defaultOrderValues
  })
  
  const onSubmit = useCallback((values: OrderFormValue) => {
    addOrder({
      _id: selectedSize._id ? selectedSize._id : '',
      __v: selectedSize.__v ? selectedSize.__v : 0,
      flavor: selectedFlavor.flavor ? selectedFlavor.flavor : '',
      flavor_image: selectedFlavor.flavor_image ? selectedFlavor.flavor_image : '',
      size:  selectedSize.size ? selectedSize.size : '',
      border_flavor: selectedBorder.border_flavor ? selectedBorder.border_flavor : '',
      price: selectedSize.price ? selectedSize.price : ''
    })
    console.log({ ...values }, 'values');
    console.log({ selectedFlavor, selectedSize, selectedBorder}, 'selected')
  }, [selectedFlavor, selectedSize, selectedBorder])

  console.log(selectedFlavor, selectedSize, selectedBorder)
  
  useEffect(() => {
    getSizesByPrices()
  },[])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-[2rem]">
        <div className="flex justify-between w-full">
          <div className='flex flex-col w-full'>
            <ScrollArea className="max-h-[520px] w-full rounded-md p-4">
              <CustomSelect title="Escolha um sabor" options={flavors} onSelect={setSelectedFlavor} />
            </ScrollArea>
            <Button type="submit" className="mx-4">Finalizar</Button>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <CustomSelect title="Escolha um tamanho" options={sizeByPrice} onSelect={setSelectedSize} />
            <CustomSelect title="Escolha uma borda" options={borders} onSelect={setSelectedBorder} />
          </div>
        </div>
      </form>
    </Form>
  )
};