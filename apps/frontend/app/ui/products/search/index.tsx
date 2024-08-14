"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { XIcon, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { InputFormProps } from "./interface"
import { useEffect } from "react"
import { performFuzzySearch } from "./fuzzySearch"

const FormSchema = z.object({
    text: z.string().optional(),
  });
  

export function InputForm({pizzas, setFilteredPizzas}: InputFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if(pizzas !== null) {
        const results = await performFuzzySearch(pizzas, data.text)
        setFilteredPizzas(results)  
    }
  }
  function onClear() {
    setFilteredPizzas(pizzas)
    form.resetField('text')
  }
  useEffect(() => {
    if (form.watch("text") === "") {
      setFilteredPizzas(pizzas)
    }
  }, [form.watch("text"), pizzas, setFilteredPizzas])
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex align-center gap-4 justify-center">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Pesquisar..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
            <SearchIcon/>
        </Button>
        <Button onClick={onClear}>
          <XIcon/>
        </Button>
      </form>
    </Form>
  )
}
