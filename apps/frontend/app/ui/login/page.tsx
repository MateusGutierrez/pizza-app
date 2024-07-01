"use client"

import { LoginSchema, TLoginFormValue, defaultLoginValues } from "@/schemas/userSchema/login"
import GenericForm from "@/app/utils/form"
import loginImg from "./assets/login.jpg"
import Image from "next/image"
import { UserContext } from "@/providers/users"
import { useCallback, useContext } from "react"

export default function Login() {
  const {login} = useContext(UserContext)
  
  const onSubmit = useCallback((values: TLoginFormValue) => {
    login(values)
  }, [login])

    return (
        <div className="min-h-[80vh] w-[60%] flex m-auto justify-between items-center">
          <div className="w-[30%] h-[600px]">
            <p className="text-4xl text-[#cd3c0c] mb-[4rem]">Login</p>
            <GenericForm 
              schema={LoginSchema}
              defaultValues={defaultLoginValues}
              onSubmit={onSubmit}  
            />
          </div>
          <Image src={loginImg} alt="pizza" className="w-[400px] h-[600px] rounded-3xl"/>
        </div>
    )
}