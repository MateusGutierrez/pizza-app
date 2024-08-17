import { createContext, useCallback } from "react";
import React from "react";
import { ContextProps, IUserContext } from "./interface";
import { Api } from "@/api/api";
import { store } from "@/store";
import { LoginDto } from '@backend/auth/dto/login.dto';
import { SignUpDto } from '@backend/auth/dto/signup.dto';
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: ContextProps) => {
    const { setAuthToken, saveUser } = store(({ setAuthToken, saveUser }) => ({ setAuthToken, saveUser }))
    const router = useRouter()
    const navigate = useCallback((page: string) => {
        router.push(page)
    }, [router])
    
    const login = useCallback( async (data: LoginDto) => {
        try {
            const response = await Api.post("auth/login", data)
            console.log(response.data)
            saveUser(response.data)
            toast({
                title: "Login realizado com sucesso",
            })
            navigate('/ui/dashboard')
        } catch (error) {
            console.log(error)
            toast({
                title: String(error),
              })
            throw error
        }
    }, [navigate, saveUser])

    const signup = useCallback(async (data: SignUpDto) => {
        try {
            const response = await Api.post("auth/signup", data)
            console.log(response)
            setAuthToken(response.data)
            toast({
                title: "Cadastro realizado com sucesso",
            })
            navigate('/ui/login')
        } catch (error) {
            console.log(error)
            toast({
                title: String(error),
              })
            throw error
        }
    }, [navigate, setAuthToken])
    return (
        <UserContext.Provider value={{ login, signup }}>
            {children}
        </UserContext.Provider>
    )
}