import "./App.css";
import ActiveBookings from "./components/ActiveBookings";
import Banners from "./components/Banners";
import ClinicLocation from "./components/ClinicLocation";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import HealthChechkUp from "./components/HealthChechkUp";
import LabTests from "./components/LabTests";
import LifestyleCheckup from "./components/LifestyleCheckup";
import PopularLabTests from "./components/PopularLabTests";
import Review from "./components/Review";
import { useFetchData } from "./hooks/apiCall";
import { PageConfigResponse } from "./model/typeDefinition";

function App() {
  const { data } = useFetchData<PageConfigResponse[]>("");

  console.log(data && data[0].page_config);
  const apiData = data && data[0].page_config;
  return (
    <div className="w-full h-full">
      <Header />
      {/* @ts-ignore */}
      <LabTests labs={apiData} />
      {/* @ts-ignore */}
      <Banners banners={apiData} />

      <div className="bg-[#E8F2FE] p-3">
        {/* @ts-ignore */}
        <HealthChechkUp health={apiData} />
      </div>
      <ActiveBookings />
      <PopularLabTests />

      <ClinicLocation />
      <div className="w-full px-3">
        {/* @ts-ignore */}
        <Review reviews={apiData} />
        {/* @ts-ignore */}

        <LifestyleCheckup checkup={apiData} />
        {/* @ts-ignore */}
        <FAQ faqs={apiData} labDetails={apiData} />
      </div>
    </div>
  );
}

export default App;
