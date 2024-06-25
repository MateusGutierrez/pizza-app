'use client'

import Image from "next/image"
import background from "../../utils/card/assets/background.jpeg"

export default function About() {
    return (
        <div className="min-h-[90vh] w-[75%] m-auto ">
            <div>
                <div className="w-[80%] m-auto overflow-hidden my-[2rem]">
                    <h1 className="text-4xl text-[#cd3c0c]">DI Nonna Pizzaria</h1>
                </div>
            </div>
            <div className="w-[80%] m-auto overflow-hidden">
                <div className="p-[20px] rounded-[1rem] pb-[4rem] relative z-[1]">
                    <Image src={background} alt="background" className="absolute left-0 top-0 h-56 min-w-full min-h-full rounded-lg z-[-1]"/>
                    <h1 className=" text-3xl text-gray-200 my-[2rem] z-[1] font-bold">Sobre Nós</h1>
                    <p className="z-[1] text-gray-200 font-bold">Bem-vindo à DI Nonna Pizzaria, onde a tradição e o sabor se encontram. Fundada em 1985, nossa pizzaria tem sido um pilar na comunidade, servindo pizzas artesanais feitas com os ingredientes mais frescos e de alta qualidade.</p>
                    <br/>
                    <p className="z-[1] text-gray-200 font-bold">Nossa história começa com Nonna Maria, cuja paixão pela culinária italiana autêntica nos inspirou a abrir as portas da DI Nonna. Cada pizza que fazemos é uma homenagem às receitas de família que foram passadas de geração em geração.</p>
                    <br/>
                    <p className="z-[1] text-gray-200 font-bold">Na DI Nonna, acreditamos que uma boa pizza deve ser compartilhada com amigos e família. É por isso que criamos um ambiente acolhedor e convidativo onde todos são bem-vindos. Nossa equipe dedicada está aqui para garantir que cada visita seja uma experiência inesquecível.</p>
                    <br/>
                    <p className="z-[1] text-gray-200 font-bold">Agradecemos por nos escolher e esperamos que você desfrute cada mordida.</p>
                    <br/>
                    <p className="text-2xl text-color5 text-center z-[1] text-gray-200 font-bold" >Buon appetito!</p>
                </div>
            </div>
        </div>

    )
}