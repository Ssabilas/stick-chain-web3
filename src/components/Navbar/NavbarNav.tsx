import { ReactElement, useState } from "react";
import NavLogo from "/assets/Logo.png";
// import LoginButtons from "../MetaMask/LoginButton";
import EwalletCards from "../MetaMask/EwalletCard";
import { useSDK } from "@metamask/sdk-react";
import SearchBars from "./SearchBar";

const NavbarNavs = (): ReactElement => {
  const [card, setCard] = useState(false);
  const { connected } = useSDK();

  // Button Group
  const Connect = () => {
    try {
      if (!connected) {
        return (
          <>
            <div className="flex justify-center items-center flex-row h-[45px]">
              <SearchBars />
              <button
                className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-xl bg-colorGrayDark/50 hover:bg-colorGrayDark animate text-colorWhite text-md"
                onClick={() => setCard(!card)}
              >
                <i className="text-xl ri-wallet-line"></i> Login
              </button>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="flex justify-center items-center flex-row h-[43px]">
              <SearchBars />
              <button className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-l-xl bg-colorGrayDark/50 hover:bg-colorGrayDark animate text-colorWhite text-md">
                <i className="text-xl ri-eth-fill"></i> 0
              </button>
              <button className="flex items-center justify-center px-5 py-2 text-gray-300 rounded-r-xl bg-colorGrayDark/50 hover:bg-colorGrayDark text-colorWhite ">
                <i className="text-xl ri-shopping-cart-2-fill"></i>
              </button>
            </div>
          </>
        );
      }
    } catch (err) {
      console.warn("Failed to Connect", err);
    }
  };
  // End Button Group

  const Nav = () => {
    return (
      <div className="flex justify-center items-center flex-row h-[45px]">
        <img src={NavLogo} alt="Navbar Logo" className="h-[45px]" />
        <hr className="w-8 text-xl font-bold rotate-90" />
        <button
          className="flex items-center justify-center px-5 py-2 font-semibold text-gray-300 text-md rounded-l-xl bg-colorGrayDark/50 hover:bg-colorGrayDark hover:text-gray-200"
          onClick={() => window.location.assign("/")}
        >
          Home
        </button>
        <button
          className="flex items-center justify-center px-5 py-2 font-semibold text-gray-300 text-md rounded-r-xl hover:bg-colorGrayDark hover:text-gray-200 bg-colorGrayDark/50"
          onClick={() => window.location.assign("/games/explore")}
        >
          Explore
        </button>
      </div>
    );
  };

  return (
    <>
      <nav className="fixed z-20 flex flex-row items-center justify-around w-full h-24 drop-shadow-xl bg-colorViolet/20 backdrop-blur-xl">
        <Nav />
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="relative z-20">
            <Connect />
            <div className="fixed">{card && <EwalletCards />}</div>
          </div>
          <button className="flex items-center justify-center gap-1 px-5 py-[10px] font-semibold rounded-xl animate text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark">
            <i className="ri-import-line"></i> Install Apps
          </button>
          <button className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-xl animate text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark">
            <i className="text-xl ri-user-fill"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarNavs;
