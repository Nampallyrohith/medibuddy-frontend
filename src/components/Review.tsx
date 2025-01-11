import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaStar } from "react-icons/fa";
import moment from "moment";

interface reviewsData {
  rating: number;
  content: string;
  name: string;
  location: string;
  days: string;
}

interface reviewProps {
  reviews: {
    id: string;
    title: string;
    props: reviewsData[];
  }[];
}

const Review: React.FC<reviewProps> = ({ reviews }) => {
  const reviewsData = reviews && reviews[5].props;

  const momentFunc = (date: string) => {
    const inputDate = moment(date, "DD MMMM YYYY");
    return inputDate.fromNow();
  };

  return (
    <div className="px-3 md:px-0 my-5 md:my-10 md:w-4/5 mx-auto">
      <h1 className="text-xl font-semibold my-3">What our Users say</h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {reviewsData &&
            reviewsData.map((review: reviewsData, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 text-[#969696] md:border md:mx-3 md:p-2 md:rounded-md md:shadow-md md: "
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="flex gap-2 items-center">
                        <FaStar size={10} className="text-[#F7BD1B]" />
                      </span>
                    ))}
                    <p>{momentFunc(review.days)}</p>
                  </div>
                  <p className="text-[#47566A] font-normal">
                    {review.location || "Bangalore"}{" "}
                  </p>
                </div>
                <p className="my-4">"{review.content.slice(0, 120)}...</p>

                <hr />
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 mx-3 my-3 rounded-sm bg-[#E1ECFE] rotate-45"></div>
                  <p className="text-[#47566A] font-normal text-sm">
                    {review.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="mt-2 hidden md:block" />
        <CarouselNext className="mt-2 hidden md:block" />
      </Carousel>
    </div>
  );
};

export default Review;
