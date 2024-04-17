import Carousel from "../../atoms/Carousel";

const CarouselInfo = () => {
  return (
    <div className="bg-[url('/src/assets/images/DJI_0057.jpg')] w-full">
      slika
      <div className="w-full mt-8 md:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row-reverse">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default CarouselInfo;
