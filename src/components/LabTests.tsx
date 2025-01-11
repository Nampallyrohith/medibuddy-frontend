import { LabProps } from "@/model/typeDefinition";

interface labsProps {
  labs: LabProps[];
}

const LabTests: React.FC<labsProps> = ({ labs }) => {
  const labTests = labs && labs[0].props;
  return (
    <div className="w-full flex flex-wrap px-4 gap-6 justify-center items-center md:my-4 md:gap-16 lg:gap-10">
      {labTests &&
        labTests.map((lab, index) => (
          <div key={index} className="text-center mt-2 w-1/4 md:w-1/12 cursor-pointer hover:transition hover:scale-110 hover:ease-linear">
            <img src={lab.iconUrl} alt="lab test" className="w-24 mx-auto" />
            <p className="text-xs w-4/5">{lab.iconText}</p>
          </div>
        ))}
    </div>
  );
};

export default LabTests;
