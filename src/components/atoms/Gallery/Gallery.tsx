import { useCallback, useState } from "react";
import { PhotoAlbum, RenderPhotoProps } from "react-photo-album";
import { galleryImagesData } from "../../../data/GalleryImagesData";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          borderRadius: "4px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          cursor: "pointer",
        }}
        {...rest}
      />
    ),
    []
  );

  return (
    <div className="w-full mt-8 px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold text-grey-blue uppercase mb-2 text-center md:text-left">
          Galerija fotografija
        </h2>
        <PhotoAlbum
          photos={galleryImagesData}
          layout="masonry"
          padding={(containerWidth) => {
            if (containerWidth < 640) return 8;
            if (containerWidth < 768) return 12;
            return 16;
          }}
          targetRowHeight={180}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={renderPhoto}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 768) return 2;
            return 3;
          }}
        />
        <Lightbox
          slides={galleryImagesData}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

export default Gallery;
