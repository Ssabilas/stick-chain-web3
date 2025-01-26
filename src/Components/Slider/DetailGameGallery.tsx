import { useState } from "react";
// import MeshGradient from "/assets/Hero-Gradient.png";
import imagesData from "../../Json/Detail/ExploreGameGallery.json";
import { useParams } from "react-router-dom";
import { decryptData } from "../../Utils/parseURL";

const ExploreGameGalleries = () => {
  const { id } = useParams<{ id: string }>();
  const decryptedData = decryptData(encodeURI(id as string));
  const [selectedId, setSelectedId] = useState("id1");
  const [display, setDisplay] = useState(true);

  const images = imagesData
    .filter(
      (images) => images.id.replace(/ /g, "-").toLowerCase() === decryptedData
    )
    .flatMap((group) =>
      group.name.map((id, index) => ({
        id,
        src: group.url[index],
      }))
    );

  return (
    <>
      {display && (
        <div className="slider">
          {/* <img
            src={MeshGradient}
            className="absolute w-full -top-6"
            alt="Gradient"
          /> */}
          <button
            className="absolute text-2xl px-4 py-2 top-6 right-8 text-colorWhite z-[999] bg-colorViolet hover:bg-colorGrayDark rounded-full "
            onClick={() => setDisplay(!display)}
          >
            <i className="ri-close-line"></i>
          </button>
          {images.map((image) => (
            <div key={image.id} className="slide">
              <input
                type="radio"
                name="slide_switch"
                id={image.id}
                checked={selectedId === image.id}
                onChange={() => setSelectedId(image.id)}
              />
              <label htmlFor={image.id} onClick={() => setSelectedId(image.id)}>
                <img
                  src={image.src}
                  width="100"
                  alt="thumbnail"
                  className="pagination"
                />
              </label>
              {selectedId === image.id && (
                <img
                  src={image.src}
                  className="thumb absolute top-12 w-[1000px] h-[500px] left-32 right-0"
                  alt="slide"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ExploreGameGalleries;
