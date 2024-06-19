import { createContext } from "react";
import React from "react";
import { ContextProps, IPizzaContext } from "./interface";
import { Api } from "@/api/api";




export const PizzaContext = createContext({} as IPizzaContext)

export const PizzaProvider = ({children}: ContextProps) => {

    const getPizzas = async () => {
        try {
            const response = await Api.get("/pizzas/")
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