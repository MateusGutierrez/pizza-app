"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { FlavorFormField } from "./flavor"
import { SizeByPriceFormField } from "./size"
import { BorderFormField } from "./border"
import { DrinkFormField } from './drinks'
import uuid4 from "uuid4"
import { store } from "@/store"
import { FormSchema } from "./schema"

export function SelectForm() {
  const { addOrder } = store(({  addOrder }) => ({ addOrder }))
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addOrder({
      __v: data.sizeByPrice.price,
      _id: uuid4(),
      flavor: data.flavorAndImage.flavor,
      flavor_image: data.flavorAndImage.image,
      size: data.sizeByPrice.size,
      price: data.sizeByPrice.price,
      border_flavor: data.border,
      border: true,
      drinks: {
        drink: data?.drinks?.drink || null,
        price: data?.drinks?.price || null,
      }
    })
    form.reset()
    toast({
      title: "Pedido adicionado ao carrinho:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-color5 p-4">
          <span className="text-white">
            Sabor: {data.flavorAndImage.flavor} - {data.sizeByPrice.size} - Borda: {data.border} - {data?.drinks?.drink}
          </span>
        </div>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4 w-full">
        <FlavorFormField form={form}/>
        <SizeByPriceFormField form={form}/>
        <BorderFormField form={form}/>
        <DrinkFormField form={form}/>
        <div className="flex justify-end">
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
    </Form>
  )
}
