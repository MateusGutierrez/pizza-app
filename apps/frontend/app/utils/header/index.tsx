'use client'

import React, { useCallback } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet" 
import logo from '@/app/public/logo.png'
import Image from "next/image"
import { FaBars } from 'react-icons/fa';
import Link from "next/link";
import { HeaderTriggerRoutes } from "@/app/ui/routes"
import { CartIcon } from "./cartIcon"
import { store } from "@/store"



export const Header = () => {
    const { user } = store(({ user }) => ({ user }))
    const filteredRoutes = HeaderTriggerRoutes.filter( route => {
        if(user) return route.title !== 'Login' && route.title !== 'Cadastre-se'
        return route
    })
    return (
    <header className="flex items-center w-[100%] h-[200px] bg-[--color1] border-b-4 border-red-700">
        <div className="flex m-auto items-center justify-between w-[75%]">
            <Link href="/">
                <Image src={logo} alt='logo' height={180}/>
            </Link>
            <div className="flex items-center gap-[2rem]">
                {user?.name ? (
                    <p>Olá, {user.name} !</p>
                ) : null}
                <CartIcon />
                <Sheet>
                    <SheetTrigger>
                        <FaBars />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col gap-4">
                    {filteredRoutes.map((trigger, index) => (
                        <Link key={index} href={trigger.link}>
                            <SheetHeader>
                                <SheetTitle>{trigger.title}</SheetTitle>
                            </SheetHeader>
                        </Link>
                    ))}
                    </SheetContent>
                    {user?.email ? (
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                        </SheetContent>
                    ) : null
                    }
                </Sheet>
            </div>
        </div>
    </header>
    )
}