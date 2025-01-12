import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface faqProps {
  faqs: {
    id: string;
    title: string;
    props: {
      id: number;
      type: number;
      question: string;
      icon: string;
      points: {
        idx: number;
        pnt: string;
        img: string;
      }[];
    }[];
  }
}

const FAQ: React.FC<faqProps> = ({ faqs }) => {
  const workingTheory = faqs && faqs.props[0];
  return (
    <div className="px-3 w-full md:w-3/4 md:mx-auto mx-0">
      {workingTheory && (
        <>
          <h1 className="text-xl md:text-center mt-10 text-text-navy-primary font-semibold">
            {workingTheory.question}
          </h1>
          <div className="w-full md:flex md:justify-center md:items-center gap-4 md:text-center mb-3">
            {workingTheory.points.map((point, index) => (
              <div
                key={point.idx}
                className="flex md:flex-col justify-center gap-3 items-center md:w-1/3 space-y-3"
              >
                <img
                  src={`https://www.medibuddy.in${point.img}`}
                  alt="faq-ans"
                  className="w-1/3 md:w-12 mr-2 md:mr-0 md:my-5"
                />
                <p
                  className={`text-sm text-[#47566A] ${
                    workingTheory.points.length - 1 === index &&
                    " ml-[-7px] md:ml-0"
                  }`}
                >
                  {point.pnt}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="block md:hidden">
        <h1 className="text-text-navy-primary">100% Safe & Secure Lab Tests</h1>
        <div className="grid grid-cols-2 text-[10px] justify-between items-center gap-3 w-full my-3">
          <div className="space-y-3 bg-[#F1F7FF] p-3 rounded-xl min-h-[110px]">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/test.svg"
              alt="lab-image"
              className="w-10"
            />
            <p>Govt. Approved Diagnostic Centres</p>
          </div>
          <div className="space-y-3 bg-[#F1F7FF] p-3 rounded-xl min-h-[110px]">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/temperature.svg"
              alt="lab-image"
              className="w-10"
            />
            <p>Daily Temperature Check of all Technicians</p>
          </div>
          <div className="space-y-3 bg-[#F1F7FF] p-3 rounded-xl min-h-[110px]">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/sanitize.svg"
              alt="lab-image"
              className="w-10"
            />
            <p>Mandatory use of Mask & Sanitizers</p>
          </div>
          <div className="space-y-3 bg-[#F1F7FF] p-3 rounded-xl min-h-[110px]">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/spray.svg"
              alt="lab-image"
              className="w-10"
            />
            <p>Regular Disinfectation of Labs</p>
          </div>
        </div>
      </div>

      <div className="my-10">
        {faqs && (
          <>
            <h1 className="text-xl md:text-center mt-5 text-text-navy-primary font-semibold">
              {faqs.title}
            </h1>

            <Accordion type="single" collapsible className="w-full">
              {faqs.props.slice(1).map((faq, index) => (
                <AccordionItem key={index} value={"item-" + index} >
                  <AccordionTrigger className="text-[#2E3742] md:text-blue-primary md:font-normal text-sm md:text-base md:shadow-md md:rounded-[17px] md:mb-3 md:h-16 gap-2 md:flex md:justify-between md:items-center md:gap-3">
                    <span className="md:flex md:items-center gap-2">
                      <img
                        src={`https://www.medibuddy.in/${faq.icon}`}
                        className="w-14 h-16 hidden md:block"
                      />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  {faq.points.map((point) => (
                    <AccordionContent
                      key={point.idx}
                      className="text-[#4D5C6F] text-xs md:text-sm leading-none "
                    >
                      <li className="md:ml-20">{point.pnt}</li>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </>
        )}
      </div>
    </div>
  );
};

export default FAQ;
