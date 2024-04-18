import { landmarksData } from "../../../data/LandmarksData";
import vector from "../../../assets/images/vector-2.png";
import Landmark from "../../atoms/Landmark";

const AreaInfo = () => {
  return (
    <div className="w-full my-12 sm:px-8 relative">
      <img
        src={vector}
        alt="vector-blue-1"
        className="hidden md:block absolute left-0 translate-y-[-80px] z-20 md:w-12 2xl:w-24"
      />
      <div className="max-w-screen-xl mx-auto flex gap-4 flex-col justify-center">
        <h2 className="text-2xl font-bold text-center uppercase">
          istražite okolicu
        </h2>
        <div className="flex flex-col px-8 sm:px-0 py-2 gap-8 lg:grid lg:grid-cols-2">
          {landmarksData.map((el) => (
            <Landmark landmark={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaInfo;
