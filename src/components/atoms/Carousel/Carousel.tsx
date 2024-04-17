import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { carouselImagesData } from "../../../data/CarouselImagesData";

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(carouselImagesData);
  }, []);

  const renderArrowPrev = (clickHandler, hasPrev, label) => {
    // Define your custom rendering for the previous arrow here
    return (
      <button onClick={clickHandler} disabled={!hasPrev}>
        LIJEVO
      </button>
    );
  };

  const renderArrowNext = (clickHandler, hasNext, label) => {
    // Define your custom rendering for the next arrow here
    return (
      <button onClick={clickHandler} disabled={!hasNext}>
        DESNO
      </button>
    );
  };

  return (
    <div className="max-h-5">
      <ReactCarousel
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={false}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
      >
        {images.map((el, index) => (
          <div key={index}>
            <img src={el} alt={`image-${index}`} />
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
