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
import { LogOutIcon, UserIcon } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export const Header = () => {
    const { loggedUser, logout } = store(({ loggedUser, logout }) => ({ loggedUser, logout }))
    const filteredRoutes = HeaderTriggerRoutes.filter( route => {
        if(loggedUser?.user) return route.title !== 'Login' && route.title !== 'Cadastre-se'
        return route
    })
    const onClick = useCallback(() => {
        logout()
        toast({
            title: `Saiu`,
          })
    }, [])
    return (
    <header className="flex items-center w-[100%] h-[200px] bg-[--color1] border-b-4 border-red-700">
        <div className="flex m-auto items-center justify-between w-[90%]">
            <Link href="/">
                <Image src={logo} alt='logo' height={180}/>
            </Link>
            <div className="flex items-center gap-[2rem]">
                {loggedUser?.user?.name ? (
                    <p>Olá, {loggedUser.user.name} !</p>
                ) : null}
                <Link href="/ui/cart">
                    <CartIcon />
                </Link>
                <Sheet>
                    <SheetTrigger>
                        <FaBars />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col gap-6">
                    {loggedUser?.user?.email ? (
                         <div className="flex gap-4">
                             <UserIcon/>
                             <SheetHeader>
                                 <SheetTitle>Olá, {loggedUser.user.name}</SheetTitle>
                             </SheetHeader>
                         </div>
                    ): null}
                    {filteredRoutes.map(({title, link, icon: Icon}, index) => (
                        <Link key={index} href={link}>
                            <div className="flex gap-4">
                                <Icon/>
                                <SheetHeader>
                                    <SheetTitle>{title}</SheetTitle>
                                </SheetHeader>
                            </div>
                        </Link>
                    ))}
                    {loggedUser?.user?.email ? (
                         <div className="flex gap-4 cursor-pointer" onClick={onClick}>
                             <LogOutIcon/>
                             <SheetHeader>
                                 <SheetTitle>Logout</SheetTitle>
                             </SheetHeader>
                         </div>
                    ): null}
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
    )
}