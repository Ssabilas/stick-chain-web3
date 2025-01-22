import { useState } from "react";
import MeshGradient from "/assets/Hero-Gradient.png";
import { memo } from "react";
import imagesData from "../../Json/Detail/MoreGameGallery.json";

const MoreGameTests = memo(() => {
  const [selectedId, setSelectedId] = useState("id2");
  const [display, setDisplay] = useState(true);

  const images = imagesData
    .filter(
      (images) => images.id.replace(/ /g, "-").toLowerCase() === "pathologic-2"
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
          <img
            src={MeshGradient}
            className="absolute w-full -top-6"
            alt="Gradient"
          />
          <button
            className="absolute text-2xl px-4 py-2 top-6 right-8 text-colorWhite z-[999] bg-colorGray hover:bg-colorGrayDark rounded-full animate"
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
                  className="pagination absolute top-12 w-[1000px] h-[500px] left-32 right-0"
                  alt="slide"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
});

export default MoreGameTests;
