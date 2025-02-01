import { useState } from "react";
import LogoBrand from "/assets/Logo.png";

const DownloadApps = () => {
  const [downloadCard, setDownloadCard] = useState(true);

  return (
    <>
      {downloadCard && (
        <section className="left-0 top-0 fixed bg-colorBlack/80 flex justify-center items-center h-[100vh] w-[100vw] flex-row">
          <div className="bg-colorGrayDark/50 w-[450px] h-[450px] flex justify-center items-center flex-col rounded-3xl drop-shadow-md backdrop-blur-2xl gap-8 z-[30]">
            <img src={LogoBrand} alt="Logo Brand" className="w-auto h-[40px]" />
            <i
              className="absolute z-20 text-4xl cursor-pointer rounded-xl hover:text-colorWhite/50 right-8 top-6 ri-close-line"
              onClick={() => setDownloadCard(!downloadCard)}
            ></i>
            <button className="px-8 py-4 text-2xl font-bold bg-colorGray rounded-xl hover:bg-colorGrayDark">
              Download for <i className="ri-windows-fill"></i>
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default DownloadApps;
