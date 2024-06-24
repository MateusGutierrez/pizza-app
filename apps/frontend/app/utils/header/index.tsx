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

import { usePathname } from 'next/navigation'
import { HeaderTriggerRoutes } from "@/app/ui/routes"



export const Header = () => {
    const path = usePathname()

    return (
    <header className="flex items-center w-[100%] h-[200px] bg-[--color1] border-b-4 border-red-700">
        <div className="flex m-auto items-center justify-between w-[75%]">
            <Image src={logo} alt='logo' height={180}/>
            <div>
            <Sheet>
                <SheetTrigger>
                    <FaBars/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-4">
                {HeaderTriggerRoutes.map((trigger, index) => (
                    <Link key={index} href={trigger.link}>
                        <SheetHeader>
                            <SheetTitle>{trigger.title}</SheetTitle>
                        </SheetHeader>
                    </Link>
                ))}
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
    )
}