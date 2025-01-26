import FooterLogo from "/assets/Logo.png";
import { useState } from "react";

const Footers = () => {
  const [language, setLanguage] = useState(false);

  const year = new Date();
  return (
    <>
      <footer className="flex items-center justify-center h-[70vh] gap-32 bg-gradient-to-b from-colorViolet to-colorPurple">
        <div className="container flex">
          <div className="flex flex-col gap-4">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="w-[300px] h-[auto]"
            />
            <h2 className="w-[60%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              perspiciatis molestias modi.
            </h2>
            <p>© Ipsum {year.getFullYear()}</p>
          </div>
          <div className="flex gap-32">
            <div className="w-[75]">
              <h2 className="text-2xl font-semibold uppercase">Company</h2>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-semibold uppercase">Useful Links</h2>
              <ul className="flex flex-col gap-2 mt-4">
                <li>
                  <a href="#">Your Accounts</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4 h-52">
              <ul className="flex flex-row self-start gap-2">
                <li className="px-3 py-2 rounded-full cursor-pointer bg-colorGray hover:bg-colorGrayDark">
                  <i className="ri-facebook-fill"></i>
                </li>
                <li className="px-3 py-2 rounded-full cursor-pointer bg-colorGray hover:bg-colorGrayDark">
                  <i className="ri-linkedin-fill"></i>
                </li>
                <li className="px-3 py-2 rounded-full cursor-pointer bg-colorGray hover:bg-colorGrayDark">
                  <i className="ri-twitter-fill"></i>
                </li>
                <li className="px-3 py-2 rounded-full cursor-pointer bg-colorGray hover:bg-colorGrayDark">
                  <i className="ri-instagram-fill"></i>
                </li>
              </ul>
              <button
                className="self-start w-full px-3 py-2 rounded-xl bg-colorGray hover:bg-colorGrayDark"
                onClick={() => setLanguage(!language)}
              >
                <i className="ri-earth-fill"></i> English - Ind
                <i
                  className={
                    language
                      ? `ri-arrow-drop-down-line`
                      : `ri-arrow-drop-up-line`
                  }
                ></i>
              </button>
              {language && (
                <ul className="relative bottom-0 flex flex-col items-center justify-center rounded-xl bg-colorGray">
                  <li className="px-[3rem] pt-2 pb-2 cursor-pointer hover:bg-colorGrayDark rounded-t-xl w-full">
                    English
                  </li>
                  <li className="px-[3rem] pb-2 cursor-pointer hover:bg-colorGrayDark pt-2 rounded-b-xl">
                    Indonesia
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footers;
