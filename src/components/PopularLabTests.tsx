import { bookPopularLabTabs, bookPopularLabTestList } from "@/model/mockData";
import React from "react";
import { Button } from "./ui/button";
import { BiSolidTimer } from "react-icons/bi";
import { HiMiniHome } from "react-icons/hi2";

const PopularLabTests = () => {
  return (
    <div className="w-full md:w-4/5 mx-auto px-3">
      <div className="flex gap-2 items-center justify-between my-3">
        <h1 className="font-semibold text-text-navy-primary text-sm">
          Book Popular Lab Tests
        </h1>
        <p className="text-blue-primary font-semibold text-sm">View All</p>
      </div>

      <div className="w-full flex overflow-x-auto items-center gap-3">
        {bookPopularLabTabs.map((tab, index) => (
          <Button
            key={index}
            className={`bg-white text-text-navy-primary hover:bg-white rounded-md px-3 py-1 
                hover:text-blue-primary border-2 hover:border-blue-primary
            `}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {bookPopularLabTestList.map((popularLabTab) => (
          <div className="relative border shadow-md rounded-2xl mt-3 p-2">
            {popularLabTab.cashless && (
              <>
                <p className="bg-[#81A200] px-5 absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl text-white text-xs py-[2px]">
                  Cashless
                </p>

                <div className="flex justify-between gap-3 items-center w-full ">
                  <div className="w-3/5">
                    <h1 className="text-sm">{popularLabTab.name}</h1>
                    <p className="flex items-center mt-2 mb-2 text-text-navy-primary text-xs">
                      <BiSolidTimer size={20} className="text-blue-primary" />
                      {"  "}
                      {popularLabTab.reports}
                    </p>
                  </div>
                  <div className="text-xs mt-2">
                    <div className="flex gap-2 items-center">
                      <p className="text-[#828282] line-through">
                        {popularLabTab.price}
                      </p>
                      <p className="text-[#459F49] px-2 py-1 bg-[#EDF7EE]">
                        {popularLabTab.discount} OFF
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="flex"> ₹ 500 </p>
                      <p className="text-[#828282]">Onwards</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-[#4F4F4F] text-xs">
                    <p className="flex items-center">
                      <HiMiniHome size={15} className="text-[#FF7265]" />{" "}
                      <span>Home</span>
                    </p>
                    <p className="flex items-center">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.60235 1.40948C2.64498 1.82863 2.69468 2.43556 2.70381 3.17136C2.75697 3.79518 2.72283 4.42336 2.60235 5.03774C2.34067 5.73403 1.9591 6.37909 1.47484 6.9437C1.02641 7.61916 0.625869 8.32526 0.276218 9.05675C0.217708 9.15715 0.181929 9.26913 0.171408 9.38486C0.160887 9.5006 0.175944 9.61724 0.215389 9.72655C0.267212 9.84705 0.34736 9.95324 0.449166 10.036C0.550973 10.1187 0.671334 10.1755 0.799895 10.2015C1.27182 10.2401 1.9386 10.2908 2.74544 10.3365C2.83678 10.3416 3.54825 10.3811 4.49921 10.3984C5.20299 10.4037 5.90554 10.3378 6.59602 10.2015C6.73447 10.1928 6.86962 10.1558 6.99321 10.0928C7.1168 10.0297 7.22621 9.94207 7.31458 9.83514C7.37367 9.70829 7.40527 9.57043 7.40737 9.43052C7.40947 9.2906 7.38198 9.15179 7.32672 9.02323C6.85073 7.54859 5.43897 6.71331 4.97618 5.06512C4.83987 4.49507 4.78022 3.90945 4.79865 3.32362C4.7874 2.64623 4.84309 1.96935 4.96503 1.30293L2.60235 1.40948Z"
                          fill="#1778F2"
                        />
                        <path
                          d="M2.14785 0.706261C2.09793 0.79609 2.07281 0.897629 2.07513 1.00037C2.07745 1.10312 2.10706 1.20334 2.16098 1.29083C2.26247 1.45423 2.4655 1.56186 3.73412 1.56084C5.00274 1.55983 5.19457 1.45321 5.29301 1.29083C5.34306 1.20393 5.36933 1.10542 5.36933 1.00514C5.36933 0.904864 5.34306 0.806351 5.29301 0.719455C5.14179 0.480955 4.83021 0.506315 3.68134 0.50327C2.59338 0.498195 2.28892 0.47385 2.14785 0.706261Z"
                          fill="#1778F2"
                        />
                        <path
                          d="M1.05107 9.3168C1.25405 9.80598 2.205 9.81207 4.03282 9.80293C6.33765 9.79076 6.57008 9.48628 6.64316 9.32999C6.78017 9.02552 6.5863 8.66931 6.23717 8.02891C5.99998 7.45037 5.56965 6.97194 5.01935 6.67506C4.65417 6.53196 4.26183 6.47164 3.87053 6.49845C3.5117 6.47758 3.15238 6.53078 2.815 6.65474C2.23704 6.95264 1.77962 7.4409 1.51999 8.03703C1.1323 8.70483 0.93639 9.04277 1.05107 9.3168Z"
                          fill="#1778F2"
                        />
                        <path
                          d="M4.50584 8.12316L6.22202 10.3935C6.24701 10.4265 6.2793 10.4533 6.31636 10.4717C6.35343 10.4901 6.39426 10.4997 6.43566 10.4997C6.47705 10.4997 6.51789 10.4901 6.55495 10.4717C6.59202 10.4533 6.62431 10.4265 6.64929 10.3935L8.36548 8.12316C8.6375 7.76423 8.80395 7.3365 8.84608 6.88811C8.88821 6.43972 8.80436 5.98847 8.60396 5.58515C8.40357 5.18183 8.09458 4.84245 7.71177 4.6052C7.32897 4.36795 6.88754 4.24225 6.43718 4.24225C5.98682 4.24225 5.54539 4.36795 5.16259 4.6052C4.77978 4.84245 4.4708 5.18183 4.2704 5.58515C4.07 5.98847 3.98615 6.43972 4.02828 6.88811C4.07041 7.3365 4.23686 7.76423 4.50888 8.12316H4.50584Z"
                          fill="#4285F4"
                          stroke="#EEF4FF"
                          stroke-width="0.710427"
                        />
                        <path
                          d="M6.38895 7.44093C6.98478 7.44093 7.46779 6.95792 7.46779 6.3621C7.46779 5.76627 6.98478 5.28326 6.38895 5.28326C5.79313 5.28326 5.31012 5.76627 5.31012 6.3621C5.31012 6.95792 5.79313 7.44093 6.38895 7.44093Z"
                          fill="#EEF4FF"
                        />
                      </svg>
                      <span>Lab</span>
                    </p>
                  </div>

                  <Button
                    type="button"
                    className="text-blue-primary border-2 px-3 py-1 hover:bg-white bg-white rounded-lg border-blue-primary"
                  >
                    Add
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularLabTests;
