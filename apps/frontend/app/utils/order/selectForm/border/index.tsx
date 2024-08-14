'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormProps } from "../interface"

const borders = [
    { border: 'Sem borda'},
    { border: 'Cheddar' },
    { border: 'Catupiry' },
    { border: 'Chocolate Branco'},
    { border: 'Chocolate Preto'},
]

export const BorderFormField = ({form}: FormProps) => {
    return (
        <FormField
          control={form.control}
          name="border"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Borda</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Escolha o sabor da borda" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {borders.map(({border}, index) => (
                        <SelectItem value={border} key={index}>{border}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}