import { createContext } from "react";
import React from "react";
import { ContextProps, IPizzaContext, Pizza } from "./interface";
import { Api } from "@/api/api";
import { store } from "@/store";




export const PizzaContext = createContext({} as IPizzaContext)

export const PizzaProvider = ({children}: ContextProps) => {
    const { addPizzas } = store(({ addPizzas }) => ({ addPizzas }))

    const getPizzas = async () => {
        try {
            const response = await Api.get("pizzas/", {
                headers: {
                    Accept: '*/*',
                }
            })
            const filteredPizzas = response.data.filter((pizza: Pizza) => pizza.hasOwnProperty('flavor'))
            addPizzas(filteredPizzas)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return (
        <PizzaContext.Provider value={{getPizzas}}>
            {children}
        </PizzaContext.Provider>
    )
}