import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { carouselImagesData } from "../../../data/CarouselImagesData";

const Carousel = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(carouselImagesData);
  }, []);

  return (
    <ReactCarousel
      autoPlay={true}
      infiniteLoop={true}
      dynamicHeight={false}
      showArrows={true}
      swipeable
      emulateTouch
      showStatus={false}
    >
      {images.map((el, index) => (
        <div key={index}>
          <img src={el} alt={`image-${index}`} />
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
