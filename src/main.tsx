import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "crypto-js";
import "remixicon/fonts/remixicon.css";
import "./css/input.css";
import "./css/output.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouterApps from "./RouterApp";

createRoot(document.getElementById("root")!).render(
  <MetaMaskProvider
    sdkOptions={{
      dappMetadata: {
        name: "Example React Dapp",
        url: window.location.href,
      },
      infuraAPIKey: import.meta.env.REACT_APP_INFURA_KEY,
    }}
  >
    <StrictMode>
      <RouterApps />
    </StrictMode>
  </MetaMaskProvider>
);
