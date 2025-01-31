import { ReactElement, useState, useEffect } from "react";
import MetamaskLogo from "/assets/Metamask-Logo.png";
import CoinbaseLogo from "/assets/Coinbase-Logo.png";
import LogoBrand from "/assets/Logo.png";
import { useConnect, useAccount } from "wagmi";

const MetamaskConnect = () => {
  const { connectors, connect } = useConnect();

  return (
    <>
      {connectors[0] && (
        <button
          className="flex w-[300px] gap-8 px-12 py-2 bg-colorGray rounded-xl hover:bg-colorGrayDark justify-center items-center h-[80px]"
          key={connectors[0].uid}
          onClick={() => connect({ connector: connectors[0] })}
        >
          <img src={MetamaskLogo} alt="Metamask Logo" className="w-[60px]" />
          <span className="text-2xl font-semibold uppercase">Metamask</span>
        </button>
      )}

      {connectors[1] && (
        <button
          className="flex w-[300px] gap-8 px-12 py-2 bg-colorGray rounded-xl hover:bg-colorGrayDark justify-center items-center h-[80px]"
          key={connectors[1].uid}
          onClick={() => connect({ connector: connectors[1] })}
        >
          <img
            src={CoinbaseLogo}
            alt="Metamask Logo"
            className="mr-2 w-[50px] object-cover"
          />
          <span className="text-2xl font-semibold uppercase">Coinbase</span>
        </button>
      )}
    </>
  );
};

const EwalletCards = (): ReactElement => {
  const { isConnected } = useAccount();
  // const [account, setAccount] = useState<string>();
  const [card, setCard] = useState(true);

  useEffect(() => {
    if (card) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [card]);

  const IsAccountConnect = () => {
    if (!isConnected) {
      return (
        <>
          <div className="flex flex-col gap-1 z-[999]">
            <h2 className="flex flex-col items-center justify-start text-xl font-bold uppercase">
              Connect to
            </h2>
            <img src={LogoBrand} alt="Logo Brand" className="w-auto h-[40px]" />
          </div>
          {/* <div className="flex gap-8 px-12 py-2 bg-colorAqua rounded-xl hover:bg-colorAqua/85">
          <img src={MetamaskLogo} alt="Metamask Logo" /> */}
          <MetamaskConnect />
          {/* </div> */}
        </>
      );
    } else {
      setTimeout(() => {
        setCard(!card);
      }, 2000);
      return (
        <>
          <div className="flex gap-4">
            <h2 className="flex flex-row text-4xl font-bold uppercase">
              Connected
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center px-12 py-2">
            <i className="text-6xl ri-check-double-line text-colorGreen"></i>
          </div>
        </>
      );
    }
  };

  return (
    <>
      {card && (
        <section className="left-0 top-0 fixed bg-colorBlack/80 flex justify-center items-center h-[100vh] w-[100vw] flex-row">
          <div className="bg-colorGrayDark/50 w-[450px] h-[450px] flex justify-center items-center flex-col rounded-3xl drop-shadow-md backdrop-blur-2xl gap-8">
            <i
              className="absolute z-20 text-4xl cursor-pointer rounded-xl hover:text-colorWhite/50 right-8 top-6 ri-close-line"
              onClick={() => setCard(!card)}
            ></i>
            <IsAccountConnect />
            {/* {connected && account && chainId && !card} */}
          </div>
        </section>
      )}
    </>
  );
};

export default EwalletCards;
