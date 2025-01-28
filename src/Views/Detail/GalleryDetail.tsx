// import GalleryImg from "/assets/HeroSlider/Hero-1.png";
import React, { useState, useCallback } from "react";
import imagesData from "../../Json/Detail/ExploreGameGallery.json";
import { useParams } from "react-router-dom";
import { decryptData } from "../../Utils/parseURL";

const DetailGameGalleries = React.lazy(
  () => import("../../Components/Slider/DetailGameGallery")
);

const GalleryDetails = () => {
  const [display, setDisplay] = useState(false);
  const { id } = useParams<{ id: string }>();
  const decryptedData = decryptData(decodeURI(id as string));

  const images = imagesData
    .filter(
      (image) => image.id.replace(/ /g, "-").toLowerCase() === decryptedData
    )
    .flatMap((group) =>
      group.name.map((id, index) => ({
        id,
        src: group.url[index],
      }))
    );

  // Optimized click handler
  const toggleGallery = useCallback(() => {
    setDisplay((prev) => !prev);
  }, []);

  return (
    <div className="w-[40%] flex flex-col justify-start items-center">
      <button
        className="self-end pb-6 text-xl text-colorAqua hover:text-colorWhite "
        onClick={toggleGallery}
        aria-label="Toggle gallery view"
      >
        View Gallery <i className="ri-arrow-right-line"></i>
      </button>
      {images.slice(0, 1).map((image, index) => (
        <div className="flex flex-row gap-12" key={index}>
          <img
            src={image.src}
            loading="lazy"
            className="w-[280px] h-[280px] object-cover rounded-xl"
            alt="Gallery"
          />
          {images[index + 1] && (
            <div
              className="flex items-center justify-center cursor-pointer bg-colorBlack rounded-xl"
              onClick={toggleGallery}
              aria-label="Open more gallery images"
            >
              <img
                src={images[index + 1].src}
                loading="lazy"
                className="w-[280px] h-[280px] object-cover rounded-xl bg-colorWhite opacity-30 hover:opacity-45  z-10"
                alt="More gallery images"
              />
              <h2 className="absolute text-xl -z-8">5+ More Photos</h2>
            </div>
          )}
        </div>
      ))}

      {display && <DetailGameGalleries />}
    </div>
  );
};

export default GalleryDetails;
