import { Pizza } from '@/providers/pizzas/interface'
import styles from './Style.module.css'
import background from "../card/assets/background.jpeg"
import Image from 'next/image'
import { Button } from '@/components/ui/button'


interface Props {
    pizza: Pizza
}

export const PizzaCard = ({pizza}: Props) => {
    return (
        <div className="px-[3rem]">
            <div className='flex flex-col gap-4'>
                <div className={styles.book}>
                    <div className="flex flex-col gap-4 items-center">
                        <Image src={background} alt={pizza.flavor} className="absolute w-[220px]  left-0 top-0 h-[220px] rounded-[50%] z-[-1]"/>
                        <h1 className="max-w-[50%] text-center text-xl font-bold text-gray-200 mt-1">{pizza.flavor}</h1>
                        <p className="max-w-[50%] text-[1rem] font-bold  text-gray-200" >{pizza.size}</p>
                        <p className="max-w-[50%] text-[1rem] font-bold  text-gray-200">R${(parseInt(pizza?.price) * 4).toFixed(2)}</p>
                    </div>

                    <div className={styles.cover}>
                        <img src={pizza.flavor_image} alt={pizza.flavor} className='w-full h-fit rounded-[50%]'/>
                    </div>
                </div>
                <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}