import { createContext, useCallback } from "react";
import React from "react";
import { ContextProps, IUserContext, Message } from "./interface";
import { Api } from "@/api/api";
import { store } from "@/store";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { EmailSenderDto } from '../../../backend/src/email-sender/email-sender.dto';
import { message } from "../pizzas/message";
import { TLoginFormValue } from "@/schemas/userSchema/login";
import { TRegisterFormValue } from "@/schemas/userSchema/register";


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: ContextProps) => {
    const { setAuthToken, saveUser } = store(({ setAuthToken, saveUser }) => ({ setAuthToken, saveUser }))
    const router = useRouter()
    const navigate = useCallback((page: string) => {
        router.push(page)
    }, [router])
    
    const emailSender = useCallback(async (data: EmailSenderDto) => {
        try {
            const response = await Api.post("email-sender", data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
            throw error
        }
    }, [])

    const login = useCallback( async (data: TLoginFormValue) => {
        try {
            const response = await Api.post("auth/login", data)
            console.log(response.data)
            saveUser(response.data)
            const emailContent = {
                email: response.data.user.email, 
                message: message
            }
            emailSender(emailContent)
            toast({
                title: "Login realizado com sucesso",
            })
            navigate('/ui/dashboard')
        } catch (error) {
            console.log(error)
            toast({
                title: "E-mail ou senha incorretos",
            })
        }
    }, [emailSender, navigate, saveUser])

    const signup = useCallback(async (data: TRegisterFormValue) => {
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
                title: "E-mail já em uso",
            })
           
        }
    }, [navigate, setAuthToken])
    return (
        <UserContext.Provider value={{ login, signup }}>
            {children}
        </UserContext.Provider>
    )
}