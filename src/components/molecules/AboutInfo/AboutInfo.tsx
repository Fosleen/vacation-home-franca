import { aboutBadgesData } from "../../../data/AboutBadgesData";
import InfoItem from "../../atoms/InfoItem";

const AboutInfo = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-grey-blue uppercase mb-4 text-center md:text-left">
          ŠTO NUDI FRANCA?
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-justify">
              Cras massa ex, accumsan in ornare ut, sagittis sed dui. Mauris
              sagittis sed eros in faucibus.
            </p>
            <p className="text-justify">Aliquam augue ipsum augue ipsum.</p>
            <p className="text-justify">
              Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
              Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
              purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
              iaculis orci, et semper nunc.
            </p>
            <p className="text-justify">
              Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
              Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
              purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
              iaculis orci, et semper nunc.
            </p>
            <p className="text-justify">
              Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
              Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
              purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
              iaculis orci, et semper nunc.Nullam ullamcorper suscipit posuere.
              Fusce in scelerisque erat. Nunc quis metus nunc. Morbi vitae
              pretium lacus, eget congue purus. Quisque sed bibendum eros, vitae
              pharetra quam. Ut eget iaculis orci, et semper nunc.
            </p>
          </div>
          <div className="flex flex-col gap-5 flex-1 bg-light-blue w-full p-4 md:p-8 justify-center h-fit">
            {aboutBadgesData.map((el, index) => (
              <div key={index} className="flex gap-4 items-center">
                <img
                  src={el.icon}
                  alt={el.text}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        <InfoItem />
      </div>
    </>
  );
};

export default AboutInfo;
