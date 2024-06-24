import { createContext } from "react";
import React from "react";
import { ContextProps, IUserContext, IUserLoginResponse } from "./interface";
import { TLoginFormValue, TRegisterFormValue } from "@/schemas/userSchema";
import { Api } from "@/api/api";



export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: ContextProps) => {
    const login = async (data: TLoginFormValue) => {
        try {
            const response = await Api.post<IUserLoginResponse>("users/login/", data)
            console.log(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const register = async (data: TRegisterFormValue) => {
        try {
            const response = await Api.post("users/", data)
            console.log(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    const getUser = async (id: string) => {
        try {
            const response = await Api.get(`users?id=${id}`)
            console.log(response)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    return (
        <UserContext.Provider value={{login, register, getUser}}>
            {children}
        </UserContext.Provider>
    )
}