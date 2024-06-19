import React from "react"
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
  
export const Header = () => {
    return (
    <header className="flex items-center w-[100%] h-[200px] bg-[--color1] border-b-4 border-red-700">
        <div className="flex m-auto items-center justify-between w-[75%]">
            <Image src={logo} alt='logo' height={180}/>
            <div>
            <Sheet>
                <SheetTrigger>
                    <FaBars/>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Combos</SheetTitle>
                    </SheetHeader>
                    <SheetHeader>
                    <SheetTitle>Cardápio</SheetTitle>
                    </SheetHeader>
                    <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
    )
}