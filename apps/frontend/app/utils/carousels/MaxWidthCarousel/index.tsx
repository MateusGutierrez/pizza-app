"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { banners } from "@/app/public/banners"
import Image from "next/image"

export function CarouselOrientation() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[plugin.current]}
      orientation="horizontal"
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-mt-1 rounded-sm">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="pt-1 max-w-full rounded-sm flex items-center justify-center md:basis-1/2">
                  <Image src={banner.src} alt={banner.alt} className="rounded-sm"/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
