import { clinicLocations } from "@/model/mockData";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ClinicLocation = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto px-3 my-10">
      <div className="flex gap-2 items-center justify-between my-3">
        <h1 className="font-semibold text-text-navy-primary text-base">
          Lab Visited
        </h1>
        <p className="text-blue-primary font-semibold text-sm">See All</p>
      </div>

      <div className="overflow-x-auto flex gap-3">
        {clinicLocations.map((clinic) => (
          <div className="rounded-xl border-2 min-w-[350px] flex flex-col gap-2 justify-between relative">
            <img
              src={clinic.clinicImg}
              alt="clinic image"
              className="rounded-t-xl"
            />
            <p className="bg-[#FFFAD6] rounded-l-full text-xs py-1 px-2 flex items-center gap-2 absolute right-0 top-[61%] lg:top-[72%]">
              <span>
                <FaStar className="text-[#F7BD1B]" />
              </span>
              4.5/5 (120 ratings)
            </p>
            <div className="p-3 font-semibold space-y-2">
              <h1>{clinic.clinicName}</h1>
              <p className="font-normal flex items-center gap-2 text-[#47566A] text-xs">
                {" "}
                <CiLocationOn />
                <span>{clinic.location}</span>
              </p>
              <p className="font-normal flex items-center gap-2 text-[#47566A] text-xs">
                {" "}
                <CiTimer />
                <span>{clinic.nextSlot}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white md:bg-[#E8F2FE] md:p-6 md:mt-5 md:rounded-lg">
        <div className="flex justify-between items-center w-full my-3">
          <div>
            <p>
              Trusted by{" "}
              <span className="text-blue-primary font-semibold">
                20,00,000+
              </span>
            </p>
            <p className="font-semibold ">User Every month</p>
          </div>
          <img
            src="https://www.medibuddy.in/assets/icons/trust.svg"
            alt="trust-logo"
            className="w-8"
          />
        </div>

        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex gap-2 items-center w-2/5 md:w-1/4 md:mx-auto text-xs md:text-sm">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/telescope.svg"
              alt=""
              className="w-8 md:w-12"
            />
            <p>200+ Approved Diagnostic Centers</p>
          </div>
          <div className="flex gap-2 items-center w-2/5 md:w-1/4 md:mx-auto text-xs md:text-sm">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/tubes.svg"
              alt=""
              className="w-8 md:w-12"
            />
            <p>1200+ Lab Tests Offered</p>
          </div>
          <div className="flex gap-2 items-center w-2/5 md:w-1/4 md:mx-auto text-xs md:text-sm">
            <img
              src="https://www.medibuddy.in/assets/icons/labs/trust/locations.svg"
              alt=""
              className="w-8 md:w-12"
            />
            <p>1200+ Pincodes Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicLocation;
