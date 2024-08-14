'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormProps } from "../interface"

const drinks = [
    { drink: 'Coca Cola 2L', price: 9.99},
    { drink: 'Coca Cola Zero 2L', price: 9.99},
    { drink: 'Guaraná 2L', price: 7.99 },
    { drink: 'Coca Cola 600ml', price: 7.99},
    { drink: 'Coca Cola Zero 600ml', price: 7.99},
    { drink: 'Guaraná 600ml', price: 6.99},
]

export const DrinkFormField = ({form}: FormProps) => {
    return (
        <FormField
          control={form.control}
          name="drinks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bebida</FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedDrink = drinks?.find(item => item.drink === value)
                  if (selectedDrink) field.onChange({
                      drink: selectedDrink.drink,
                      price: selectedDrink.price,
                    })
                }}
                defaultValue={field.value?.drink}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Gostaria de uma bebida ?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {drinks.map(({drink, price}, index) => (
                        <SelectItem value={drink} key={index}>
                          <span>{drink} <span className="text-green-900">+ R$ {price}</span></span>
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