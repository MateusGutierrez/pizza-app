import { CarouselOrientation } from "@/app/utils/carousels/MaxWidthCarousel"
import { Menu } from "@/app/utils/products"
import { Promos } from "@/app/utils/promos"

  
export const Dashboard = () => {
    return (
        <div className="h-[95vh] w-[75%] m-auto" >
            <div>
                <CarouselOrientation/>
            </div>
            <div>
                <Promos/>
            </div>
            <div>
                <Menu/>
            </div>
        </div>
    )
}