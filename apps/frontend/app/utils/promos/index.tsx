import { Card } from "@/app/utils/card"  

export const Promos = () => {
    return (
    <div className="flex justify-between items-center mt-[1rem] md:basis-1/3 gap-[3rem]">
        <Card  title="1 Pizza Extra Large (16 fatias) + 1 Broto + Refrigerante 2mL de cortesia" price={130}/>
        <Card  title="1 Pizza Large (12 fatias) + Refrigerante 2L de cortesia" price={90} />
        <Card  title="1 Pizza Medium (8 fatias) + Refrigerante 600mL de cortesia" price={70} />
    </div>
    )
}