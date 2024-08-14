'use client'

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { FormProps } from "../interface"
import { useMemo } from "react"
import { store } from "@/store"
import Image from "next/image"

export const FlavorFormField = ({form}:FormProps) => {
    const { pizzas } = store(({  pizzas }) => ({ pizzas }))
    const flavors = useMemo(() => pizzas?.map(pizza => ({
        flavor: pizza.flavor,
        flavor_image: pizza.flavor_image
      })),[pizzas])
    return (
        <FormField
          control={form.control}
          name="flavorAndImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sabores</FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedFlavor = flavors?.find(item => item.flavor === value)
                  if (selectedFlavor) field.onChange({
                      flavor: selectedFlavor.flavor,
                      image: selectedFlavor.flavor_image,
                    })
                }}
                defaultValue={field.value?.flavor}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha um sabor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="w-full">
                    {flavors?.map((pizza, index) => (
                      <div key={index} className='flex justify-between items-center hover:bg-accent'>
                        <SelectItem value={pizza.flavor} className="h-[60px]">
                          <span>{pizza.flavor}</span>
                        </SelectItem>
                        <Image src={pizza.flavor_image as string} height={50} width={50} alt={pizza.flavor} className="rounded-[50%] mr-6" />
                      </div>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}