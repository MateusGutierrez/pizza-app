"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm } from "react-hook-form"
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
import { ZodSchema, z } from "zod"
import Link from "next/link"

type FormProps<T extends FieldValues> = {
  schema: ZodSchema<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
};

export default function GenericForm<T extends FieldValues>({ schema, defaultValues, onSubmit }: FormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const hasNameValue = !!Object.keys(defaultValues).find(value => value === 'name')
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {Object.keys(defaultValues).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</FormLabel>
                <FormControl>
                  <Input placeholder={key} {...field} type={key} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <div className="flex justify-between items-center">
          <Button type="submit">Login</Button>
          {!hasNameValue ? (
            <Button type="button">
              <Link href='/ui/register'>
                Register
              </Link>
            </Button>
          ) : null}
        </div>
      </form>
    </Form>
  );
}