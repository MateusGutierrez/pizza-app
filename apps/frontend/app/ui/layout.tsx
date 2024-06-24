'use client'

import { UserProvider } from "@/providers/users";
import { Footer } from "../utils/footer";
import { Header } from "../utils/header";
import { PizzaProvider } from "@/providers/pizzas";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <main className="bg-color1 relative">
            <Header />
                <PizzaProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </PizzaProvider>
            <Footer />
        </main>
    )
}