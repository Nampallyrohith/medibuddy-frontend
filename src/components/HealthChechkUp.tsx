import React, { useState } from "react";
import { Button } from "./ui/button";
import { BiSolidTimer } from "react-icons/bi";
import radiologImg from "@/assets/radiology.png";
import { HiMiniHome } from "react-icons/hi2";

interface healthCheckupProps {
  health:
    | {
        id: string;
        heading: string;
        categories: {
          [key: string]: string[]; // Dynamic keys for categories
        };
        props: {
          packages: {
            packageDisplayName: string;
            testCount: number;
            fastingHoursText: string;
            isRadiologyIncluded: boolean;
            isHomeSampleAvailable: boolean;
            price: number;
            isAvailable: boolean;
            isSponsored: boolean;
            reportsTatText: string;
            subCategories: string[];
            cartId: number;
          }[];
        }[];
      }[]
    | null;
}

const HealthChechkUp: React.FC<healthCheckupProps> = ({ health }) => {
  const healthItem = health && health[2];
  const categories = healthItem && healthItem.categories;
  const healthData = healthItem && healthItem.props[0].packages;

  const [selectedCategory, setSelectedCategory] = useState<string>("Popular");
  const [cartCount, setCartCount] = useState<number>(0);
  const filteredPackages =
    selectedCategory && healthData
      ? healthData.filter((pkg) => {
          return pkg.subCategories.includes(selectedCategory.toUpperCase());
        })
      : [];
  return (
    <div className="w-full px-0 md:w-4/5 mx-auto">
      <div className="flex gap-2 items-center justify-between my-3">
        <h1 className="font-semibold text-text-navy-primary text-sm">
          {health && health[2].heading}
        </h1>
        <p className="text-blue-primary font-semibold text-sm">View All</p>
      </div>

      {/* Tabs */}
      <div className="w-full flex overflow-x-auto items-center gap-3">
        {categories &&
          Object.values(categories).map((categoryList, index) =>
            categoryList.map((category, subIndex) => (
              <Button
                key={`${index}-${subIndex}`}
                className={`bg-white hover:bg-white rounded-md px-3 py-1 ${
                  selectedCategory === category
                    ? "text-blue-primary border-2 !bg-white hover:bg-white border-blue-primary"
                    : "text-text-navy-primary hover:bg-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))
          )}
      </div>

      {/* Plans */}
      <div className="flex overflow-x-auto my-4 gap-3 ">
        {filteredPackages?.map((pkg, index) => (
          <div
            key={index}
            className="px-4 pt-4 border min-w-[350px] min-h-[350px] flex flex-col  relative rounded-2xl shadow-sm bg-white"
          >
            {!pkg.isSponsored && (
              <p className="bg-[#F40009] px-5 absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl text-white text-xs py-[3px]">
                Sponsored
              </p>
            )}
            <h2 className="text-md font-semibold mt-2 text-text-navy-primary">
              {pkg.packageDisplayName}
            </h2>
            <p className="flex items-center mt-8 mb-2 text-blue-primary text-sm">
              <BiSolidTimer size={20} /> {pkg.reportsTatText}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <h3 className="text-text-navy-primary text-sm font-semibold">
                  {pkg.testCount} Tests
                </h3>
                <li className="text-[#4F4F4F] text-[10px] mt-3">
                  Cholesterol - Total
                </li>
                <li className="text-[#4F4F4F] text-[10px]">
                  Vitamin D... + {pkg.testCount - 2} more
                </li>
              </div>
              <div>
                <h3 className="text-text-navy-primary text-sm font-semibold">
                  Includes
                </h3>
                <p className="flex items-center mt-3 text-[#4F4F4F] text-[10px]">
                  <img
                    src={radiologImg}
                    alt="radiologo image"
                    className="mr-1"
                  />
                  Radiology
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-[#F8F8F8] px-3 pb-2 my-2 rounded-md">
              <div>
                <h2 className="text-xs font-semibold mt-2 text-text-navy-primary">
                  Fast
                </h2>
                <p className="text-[#4F4F4F] text-[10px] mt-2">
                  {pkg.fastingHoursText}
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold mt-2 text-text-navy-primary">
                  Available at
                </h2>
                <p className="text-[#4F4F4F] text-[10px] mt-2 flex items-center gap-1">
                  {pkg.isHomeSampleAvailable && (
                    <>
                      <HiMiniHome size={15} className="text-[#FF7265]" />{" "}
                      <span>Home</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="pt-5 flex justify-between items-center">
              <p className="text-text-navy-primary text-sm font-semibold">
                {pkg.price}/-
              </p>

              {pkg.cartId || cartCount !== 0 ? (
                <div className="border border-blue-primary flex items-center gap-2 text-blue-primary rounded-xl text-blue-primary">
                  <Button
                    className=" border-none rounded-xl shadow-none text-blue-primary hover:bg-white bg-white"
                    type="button"
                    onClick={() => setCartCount((prevState) => prevState - 1)}
                  >
                    {" "}
                    -{" "}
                  </Button>
                  <p>{pkg.cartId || cartCount}</p>
                  <Button
                    className=" border-none shadow-none rounded-xl hover:bg-white text-blue-primary bg-white"
                    type="button"
                    onClick={() => setCartCount((prevState) => prevState + 1)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={() => setCartCount((prevState) => prevState + 1)}
                  className="bg-blue-primary text-white px-3 py-1 hover:bg-blue-primary hover:shadow-md"
                >
                  Add to cart
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthChechkUp;
