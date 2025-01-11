import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const bannersCard = (banners && banners[1].props) || []; // Access the `props` array from `banners`
  console.log(bannersCard);

  return (
    <div className="my-5">
      <Carousel>
        <CarouselContent>
          {bannersCard.map((banner: BannerCard, index: number) => (
            <CarouselItem key={index}>
              <img src={banner.bannerUrl} alt={`Banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banners;
