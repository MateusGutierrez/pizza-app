import { Card } from "@/app/utils/card"  

export const Promos = () => {
    return (
    <div className="flex gap-[1rem] mt-[1rem]">
        <Card title="1 Pizza Gigante (12 fatias) + 1 Broto + Refrigerante 2mL de cortesia" price={100}/>
        <Card title="1 Pizza Grande (12 fatias) + Refrigerante 2L de cortesia" price={100} />
        <Card title="1 Pizza Média (8 fatias) + Refrigerante 600mL de cortesia" price={100} />
    </div>
    )
}