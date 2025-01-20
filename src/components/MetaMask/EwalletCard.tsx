import { ReactElement, useState } from "react";
import MetamaskLogo from "/assets/Metamask-Logo.png";
import LogoBrand from "/assets/Nav-Logo.png";
import { useSDK } from "@metamask/sdk-react";
import GradientMest from "/assets/Hero-Gradient.png";
// import WebLogo from "/assets/Web-Logo.png";

const EwalletCards = (): ReactElement => {
  const [account, setAccount] = useState<string>();
  const { sdk, connected, chainId } = useSDK();
  const [card, setCard] = useState(true);

  const connect = async () => {
    try {
      const account = await sdk?.connect();
      setAccount(account?.[0]);
    } catch (err) {
      console.warn("Failed to Connect", err);
    }
  };

  const IsAccountConnect = () => {
    if (!connected) {
      return (
        <>
          <div className="flex gap-4">
            <h2 className="flex flex-row text-4xl font-bold uppercase">
              Connect to
            </h2>
            <img src={LogoBrand} alt="Logo Brand" />
          </div>
          <div className="flex gap-8 px-12 py-2 bg-colorAqua rounded-xl hover:bg-colorAqua/85">
            <img src={MetamaskLogo} alt="Metamask Logo" />
            <button
              className="text-2xl font-extrabold text-colorViolet"
              onClick={connect}
            >
              METAMASK
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex gap-4">
            <h2 className="flex flex-row text-4xl font-bold uppercase">
              Connected
            </h2>
          </div>
          <div className="flex justify-center items-center flex-row px-12 py-2">
            <img src={MetamaskLogo} alt="Metamask Logo" />
            <hr className="text-xl font-extrabold w-52" />
            <i className="ri-check-double-line text-6xl text-colorGreen"></i>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {card && (
        <section className="left-[35%] top-52 fixed">
          <div className="bg-colorViolet w-[600px] h-[600px] flex justify-center items-center flex-col rounded-3xl drop-shadow-md border-2 gap-8">
            <i
              className="absolute z-20 text-4xl cursor-pointer right-8 top-6 ri-close-line"
              onClick={() => setCard(!card)}
            ></i>
            <img
              src={GradientMest}
              className="fixed top-0 w-full rounded-t-3xl"
              alt="Gradient Card"
            />
            <IsAccountConnect />
            {connected && account && chainId && !card}
          </div>
        </section>
      )}
    </>
  );
};

export default EwalletCards;
