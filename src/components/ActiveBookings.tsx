import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ActiveBookingsList } from "@/model/mockData";
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

const ActiveBookings = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs md:max-w-xl lg:max-w-6xl">
      <div className="flex gap-2 items-center justify-between my-3">
        <h1 className="font-semibold text-text-navy-primary text-sm">
          Your Active Bookings
        </h1>
        <p className="text-blue-primary font-semibold text-sm">View All</p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {ActiveBookingsList.map((booking, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 w-full"
            >
              <Card className="w-full">
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="flex items-center gap-1 text-sm">
                        <img src={booking.avatar} alt="avatar" />
                        <span>{booking.name}</span>
                      </p>
                      <p className="flex items-center gap-1 text-base font-semibold">
                        <FaCheckCircle size={15} className="text-[#81A200]" />
                        <span>Appointment confirmed</span>
                      </p>
                    </div>
                    <p className="border rounded-full p-2 cursor-pointer">
                      <MdKeyboardArrowRight
                        size={20}
                        className="text-blue-primary"
                      />
                    </p>
                  </div>
                  <div className="bg-[#F6FAFF] text-text-navy-primary flex justify-between items-center gap-2 text-center p-2 text-[10px] font-semibold border border-[#D6E8FF] rounded-lg">
                    <div className="border-r pr-2 border-r-[#D6E8FF]">
                      <p>{booking.date}</p>
                      <p className="font-normal">{booking.day}</p>
                    </div>
                    <div className="border-r pr-2 border-r-[#D6E8FF]">
                      <p>{booking.time}</p>
                      <p className="font-normal">{booking.service}</p>
                    </div>
                    <div>
                      <p>{booking.noOfTest}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm gap-2 flex justify-center items-center text-muted-foreground lg:hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full border bg-[#b9b7b7] ${
              current === index + 1 && "!bg-blue-primary"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ActiveBookings;
