import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
interface BannerCard {
  bannerUrl: string;
}

interface BannerProps {
  banners:
    | {
        id: string;
        title: string;
        props: BannerCard[];
      }[]
    | null;
}

const Banners: React.FC<BannerProps> = ({ banners }) => {
  const bannersCard = (banners && banners[1].props) || [];

  return (
    <div className="px-3 md:px-0 my-5 md:my-10 md:w-4/5 mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {bannersCard.map((banner: BannerCard, index: number) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <img src={banner.bannerUrl} alt={`Banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="mt-2 hidden md:block" />
        <CarouselNext className="mt-2 hidden md:block" />
      </Carousel>
    </div>
  );
};

export default Banners;
