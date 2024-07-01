"use client"

import { RegisterSchema, TRegisterFormValue, defaultRegisterValues } from "@/schemas/userSchema/register"
import GenericForm from "@/app/utils/form"
import Image from "next/image"
import registerImg from "./assets/register.jpeg"
import { UserContext } from "@/providers/users"
import { useCallback, useContext } from "react"

export default function Register() {
  const {register} = useContext(UserContext)

  const onSubmit = useCallback((values: TRegisterFormValue) => {
    register(values)
  }, [register])

    return (
      <div className="min-h-[80vh] w-[60%] flex m-auto justify-between items-center" >
        <div className="w-[30%]  h-[600px]">
            <p className="text-4xl text-[#cd3c0c] mb-[4rem]">Cadastre-se</p>
            <GenericForm 
              schema={RegisterSchema} 
              defaultValues={defaultRegisterValues} 
              onSubmit={onSubmit}/>
        </div>
        <Image src={registerImg} alt="pizza" className="w-[400px] rounded-3xl"/>
      </div>
    )
}