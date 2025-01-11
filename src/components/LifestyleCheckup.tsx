import React from "react";

interface lifestyleCheckupProps {
  checkup: {
    id: string;
    title: string;
    props: {
      title: string;
      imgSrc: string;
    }[];
  }[];
}

const LifestyleCheckup: React.FC<lifestyleCheckupProps> = ({ checkup }) => {
  const checkupData = checkup && checkup[3].props;
  console.log(checkupData);
  return (
    <div className="md:w-3/4 md:mx-auto h-full px-3">
      <h1 className="font-semibold">{checkup && checkup[3].title}</h1>

      <div className="flex flex-wrap gap-3 items-center w-full my-4">
        {checkupData &&
          checkupData.map((item, index) => (
            <div
              key={index}
              className="border text-center rounded-3xl shadow  flex flex-col justify-center items-center w-[48%] mx-auto min-h-[150px] md:w-[200px]"
            >
              <img
                src={`https://www.medibuddy.in/${item.imgSrc}`}
                alt="lifestyle-image"
                className="w-20"
              />
              <p className="text-sm">{item.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LifestyleCheckup;
