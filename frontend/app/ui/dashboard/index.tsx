import { CarouselOrientation } from "@/app/utils/carousels/MaxWidthCarousel"
import { Menu } from "@/app/utils/products"
import { Promos } from "@/app/utils/promos"

  
export const Dashboard = () => {
    return (
        <div className="max-h-[95vh] w-[75%] m-auto" >
            <div>
                <CarouselOrientation/>
            </div>
            <div>
                <p className="my-10">
                    <span className="text-4xl text-[#cd3c0c]">PROMOÇÕES</span>
                </p>
                <Promos/>
            </div>
            <div>
            <p className="my-10">
                    <span className="text-4xl text-[#cd3c0c]">CARDÁPIO</span>
                </p>
                <Menu/>
            </div>
        </div>
    )
}