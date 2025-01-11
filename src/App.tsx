import "./App.css";
import Banners from "./components/Banners";
import Header from "./components/Header";
import LabTests from "./components/LabTests";
import { useFetchData } from "./hooks/apiCall";
import { PageConfigResponse } from "./model/typeDefinition";

function App() {
  const { data } = useFetchData<PageConfigResponse[]>("");

  console.log(data && data[0].page_config);
  const apiData = data && data[0].page_config
  return (
    <div className="w-full h-full px-3 md:px-0">
      <Header />
      {/* @ts-ignore */}
      <LabTests labs={apiData} />
      {/* @ts-ignore */}
      <Banners banners={apiData} />
    </div>
  );
}

export default App;
