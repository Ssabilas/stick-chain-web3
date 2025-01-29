import { useState, useEffect } from "react";
import NavLogo from "/assets/Logo.png";
import EwalletCards from "../MetaMask/EwalletCard";
import { useSDK } from "@metamask/sdk-react";
import SearchBars from "./SearchBar";
import CartBars from "./CartBar";
import { CartCounts } from "./CartCount";

const NavbarNavs: React.FC = () => {
  const [card, setCard] = useState<boolean>(false);
  const { connecting, connected } = useSDK();
  const [loading, setLoading] = useState(true); // State for loading animation
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  // Load cartItems from localStorage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Listen for changes to localStorage from other tabs/windows
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cartItems") {
        const storedCartItems = localStorage.getItem("cartItems");
        setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Update loading state based on connecting status
  useEffect(() => {
    if (!connecting) {
      setLoading(false);
    }
  }, [connecting]);

  // Button Group Component
  const Connect: React.FC = () => {
    if (loading || connecting) {
      return (
        <div className="flex justify-center items-center flex-row h-[45px]">
          <SearchBars />
          <button className="flex items-center justify-center px-5 py-2 text-gray-400 rounded-xl bg-colorGrayDark/50 animate-pulse">
            Connecting...
          </button>
        </div>
      );
    }

    return (
      <div className="flex justify-center items-center flex-row h-[45px]">
        <SearchBars />
        {connected ? (
          <>
            <div className="flex flex-row gap-2 mx-2">
              <button className="flex items-center justify-center gap-1 px-5 py-[10px] font-semibold rounded-xl text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark">
                <i className="ri-import-line"></i> Install Apps
              </button>
              <button className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-xl text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark">
                <i className="text-xl ri-user-fill"></i>
              </button>
            </div>
            <button className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-l-xl text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark">
              <i className="text-xl ri-eth-fill"></i> 0
            </button>
            <button
              className="flex items-center justify-center px-5 py-2 text-gray-300 rounded-r-xl bg-colorGrayDark/50 hover:bg-colorGrayDark"
              onClick={() => setShowCart(!showCart)}
            >
              <i className="text-xl ri-shopping-cart-2-fill"></i>
              {cartItems.length > 0 && <CartCounts />}
            </button>
            {showCart && <CartBars />}
          </>
        ) : (
          <>
            <button
              className="flex items-center justify-center gap-1 px-5 py-2 font-semibold rounded-xl text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark"
              onClick={() => setCard(!card)}
            >
              <i className="text-xl ri-wallet-line"></i> Login
            </button>
            <button className="flex items-center justify-center gap-1 px-5 py-[10px] font-semibold rounded-xl text-colorWhite text-md bg-colorGrayDark/50 hover:bg-colorGrayDark ml-2">
              <i className="ri-import-line"></i> Install Apps
            </button>
          </>
        )}
      </div>
    );
  };

  const Nav: React.FC = () => (
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
        className="flex items-center justify-center px-5 py-2 font-semibold text-gray-300 text-md rounded-r-xl bg-colorGrayDark/50 hover:bg-colorGrayDark hover:text-gray-200"
        onClick={() => window.location.assign("/explore")}
      >
        Explore
      </button>
    </div>
  );

  return (
    <nav className="fixed z-20 flex flex-row items-center justify-around w-full h-24 drop-shadow-xl bg-colorViolet/20 backdrop-blur-xl">
      <Nav />
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="relative z-20">
          <Connect />
          {card && (
            <div className="fixed">
              <EwalletCards />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarNavs;
