'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormProps } from "../interface"
import { store } from "@/store"

export const SizeByPriceFormField = ({form}:FormProps) => {
    const { sizeByPrice } = store(({ sizeByPrice }) => ({ sizeByPrice }))
    
    return (
        <FormField
          control={form.control}
          name="sizeByPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tamanho & Preço</FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedSize = sizeByPrice?.find(item => item.size === value)
                  if (selectedSize) field.onChange({
                    size: selectedSize.size,
                    price: selectedSize.price,
                  })
                } }
                defaultValue={field.value?.size}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha um tamanho" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sizeByPrice?.map(({ size, price }, index) => (
                    <SelectItem key={index} value={size}>
                      <span>{size} <span className="text-green-900">+ R${price.toFixed(2)}</span></span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}
