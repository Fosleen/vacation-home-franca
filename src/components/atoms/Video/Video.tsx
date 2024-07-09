import { FC } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Video: FC<{ url: string }> = ({ url }) => {
  return (
    <LazyLoadComponent>
      <div className="w-full mt-8 px-8">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center relative pb-[56.25%] h-0 2xl:pb-[40%]">
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </LazyLoadComponent>
  );
};

export default Video;
