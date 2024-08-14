import { createContext } from "react";
import React from "react";
import { ContextProps, IPizzaContext } from "./interface";
import { Api } from "@/api/api";
import { store } from "@/store";
import {PizzaDto} from "@backend/pizzas/dto/create-pizza.dto"



export const PizzaContext = createContext({} as IPizzaContext)

export const PizzaProvider = ({children}: ContextProps) => {
    const { addPizzas, getSizeByPrice } = store(({ addPizzas, pizzas, getSizeByPrice }) => ({ addPizzas, pizzas, getSizeByPrice }))

    const getPizzas = async () => {
        try {
            const response = await Api.get("pizzas/", {
                headers: {
                    Accept: '*/*',
                }
            })
            const filteredPizzas = response.data.filter((pizza: PizzaDto) => pizza.hasOwnProperty('flavor'))
            addPizzas(filteredPizzas)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const getSizesByPrices = async () => {
        try {
            const response = await Api.get("size-by-price/", {
                headers: {
                    Accept: '*/*',
                }
            })
            getSizeByPrice(response.data)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return (
        <PizzaContext.Provider value={{getPizzas, getSizesByPrices}}>
            {children}
        </PizzaContext.Provider>
    )
}