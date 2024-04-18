import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Carousel from "../../atoms/Carousel";
import Aos from "aos";
import { useEffect } from "react";

const CarouselInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[url('/src/assets/images/bg-blue.jpg')] w-full bg-cover md:mt-10">
      <div className="py-4 w-full lg:mt-8 md:px-8 lg:pt-12">
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row w-full lg:gap-8">
          <div className="px-8 md:p-0 md:py-8 lg:w-1/2">
            <Carousel />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-6 p-8 pb-12 md:pb-0 pt-12 md:px-0 lg:py-8 lg:mb-24">
            <h2 className="text-2xl font-semibold text-center text-light-blue">
              O KUĆI FRANCA
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-justify text-light-blue">
                Cras massa ex, accumsan in ornare ut, sagittis sed dui. Mauris
                sagittis sed eros in faucibus. Aliquam augue ipsum. Cras massa
                ex, accumsan in ornare ut, sagittis sed dui. Mauris sagittis sed
                eros in faucibus. Aliquam.
              </p>
              <p className="text-justify text-light-blue">
                Nullam ullamcorper suscipit posuere. Fusce in scelerisque erat.
                Nunc quis metus nunc. Morbi vitae pretium lacus, eget congue
                purus. Quisque sed bibendum eros, vitae pharetra quam. Ut eget
                iaculis orci, et semper nunc.
              </p>
              <p className="text-justify text-light-blue">
                Quisque sed bibendum eros, vitae pharetra quam. Ut eget iaculis
                orci, et semper nunc.
              </p>
            </div>
            <div
              className="flex
              w-full gap-4 justify-center md:justify-start"
            >
              <Button onClick={() => navigate("/o-nama")}>
                GALERIJA FOTOGRAFIJA
              </Button>
              <Button onClick={() => navigate("/kontakt")}>REZERVIRAJ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselInfo;
