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
  const apiData = data && data[0]?.page_config;

  const renderComponent = (id: string, props: any) => {
    const numId = Number(id) + 1;
    switch (numId) {
      case 1:
        return <LabTests key={id} labs={props} />;
      case 2:
        return <Banners key={id} banners={props} />;
      case 3:
        return (
          <>
            <div key={id} className="bg-[#E8F2FE] p-3">
              <HealthChechkUp health={props} />
            </div>
            <ActiveBookings />
            <PopularLabTests />
            <ClinicLocation />
          </>
        );
      case 6:
        return (
          <div key={id} className="w-full px-3">
            <Review reviews={props} />
          </div>
        );
      case 4:
        return (
          <div key={id} className="w-full px-3">
            <LifestyleCheckup checkup={props} />
          </div>
        );
      case 7:
        return (
          <div key={id} className="w-full px-3">
            <FAQ faqs={props} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full">
      <Header />
      {apiData &&
        Object.entries(apiData).map(([key, value]) =>
          renderComponent(key, value)
        )}
    </div>
  );
}

export default App;
