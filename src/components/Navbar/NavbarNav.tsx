import { ReactElement, useState } from "react";
import NavLogo from "/assets/Nav-Logo.png";
// import LoginButtons from "../MetaMask/LoginButton";
import EwalletCards from "../MetaMask/EwalletCard";

const NavbarNavs = (): ReactElement => {
  const [card, setCard] = useState(false);
  return (
    <>
      <nav className="flex justify-around items-center flex-row h-24 drop-shadow-xl fixed w-full z-20 bg-colorViolet/20 backdrop-blur-xl">
        <img src={NavLogo} alt="Navbar Logo" />
        <form action="#" className="w-[600px]">
          <div className="bg-colorGrayDark px-5 py-2 w-full flex gap-4 rounded-full border-2 border-colorGray">
            <i className="ri-search-line"></i>
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              placeholder="Search items, collections, and accounts"
            />
          </div>
        </form>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="relative z-20" onScroll={() => setCard(!card)}>
            <button
              className="flex items-center justify-center px-12 py-2 font-semibold uppercase rounded-full bg-colorWhiteDark/85 text-colorViolet hover:bg-colorWhiteDark/60"
              onClick={() => setCard(!card)}
            >
              Login
            </button>
            <div className="fixed">{card && <EwalletCards />}</div>
          </div>
          <hr className="text-xl font-bold w-8 rotate-90" />
          <button className="flex justify-center items-center text-gray-300 hover:text-gray-200">
            <i className="ri-shopping-cart-2-fill text-4xl"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarNavs;
