import photo from "../../../assets/images/DJI_0056.jpg";
import Button from "../../atoms/Button";

const HomepageInfo = () => {
  return (
    <div className="w-full mt-8 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse">
        <div className="lg:py-8 z-10 w-full">
          <div className="bg-light-blue flex flex-col justify-center items-center gap-6 p-8 pb-16 lg:p-8 lg:translate-x-[-64px] lg:mr-[-64px]">
            <h2 className="text-xl font-semibold text-center">
              DOBRODOŠLI U OAZU MIRA
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-justify">
                Cras massa ex, accumsan in ornare ut, sagittis sed dui. Mauris
                sagittis sed eros in faucibus. Aliquam augue ipsum, imperdiet
                sit amet ultrices eget, vestibulum ac velit sit amet ultrices
                eget, vestibulum ac velit sit amet ultrices eget, vestibulum ac
                velit.
              </p>
              <hr className="w-full border-main-blue" />
              <p className="text-justify">
                Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
                Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
                purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
                iaculis orci, et semper nunc.
              </p>
            </div>
            <Button>saznaj više</Button>
          </div>
        </div>
        <div className="p-8 translate-y-[-64px] lg:translate-y-0 lg:max-w-2xl lg:p-0 z-0">
          <img
            src={photo}
            alt="franca-house-photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageInfo;
