import { ReactElement, useState } from "react";
import NavLogo from "/assets/Nav-Logo.png";
// import LoginButtons from "../MetaMask/LoginButton";
import EwalletCards from "../MetaMask/EwalletCard";
import { useSDK } from "@metamask/sdk-react";
import SearchBars from "./SearchBar";

const NavbarNavs = (): ReactElement => {
  const [card, setCard] = useState(false);
  const { connected } = useSDK();

  const Connect = () => {
    try {
      if (!connected) {
        return (
          <>
            <button
              className="flex items-center gap-1 justify-center px-5 py-2 font-semibold rounded-xl bg-gradient-to-r from-colorGray to-colorGrayDark hover:to-colorGray animate text-colorWhite text-md border-2 border-colorGray"
              onClick={() => setCard(!card)}
            >
              <i className="ri-wallet-line text-xl"></i> Login
            </button>
          </>
        );
      } else {
        return (
          <>
            <div className="flex">
              <button className="flex items-center gap-1 justify-center px-5 py-2 font-semibold rounded-l-xl bg-gradient-to-r from-colorGrayDark to-colorGray hover:from-colorGray hover:to-colorGray animate text-colorWhite text-md border-2 border-colorGray">
                <i className="ri-eth-fill text-xl"></i> 0
              </button>
              <button className="flex items-center gap-1 justify-center px-5 py-2 font-semibold rounded-r-xl bg-gradient-to-r from-colorGray to-colorGrayDark hover:to-colorGray animate text-colorWhite text-md border-2 border-colorGray">
                <i className="ri-user-fill text-xl"></i> Profile
              </button>
            </div>
          </>
        );
      }
    } catch (err) {
      console.warn("Failed to Connect", err);
    }
  };

  return (
    <>
      <nav className="flex justify-around items-center flex-row h-24 drop-shadow-xl fixed w-full z-20 bg-colorViolet/20 backdrop-blur-xl">
        <img src={NavLogo} alt="Navbar Logo" />
        <SearchBars />
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="relative z-20">
            <Connect />
            <div className="fixed">{card && <EwalletCards />}</div>
          </div>
          <hr className="text-xl font-bold w-8 rotate-90" />
          <button className="flex justify-center items-center text-gray-300 hover:text-gray-200 bg-gradient-to-r from-colorGray to-colorGrayDark hover:to-colorGray px-5 py-2 rounded-xl border-2 border-colorGray">
            <i className="ri-shopping-cart-2-fill text-xl"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarNavs;
