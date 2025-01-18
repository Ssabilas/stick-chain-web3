import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/input.css";
import "./css/output.css";
import App from "./App.tsx";
import { MetaMaskProvider } from "@metamask/sdk-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        infuraAPIKey: import.meta.env.REACT_APP_INFURA_KEY,
      }}
    >
      <App />
    </MetaMaskProvider>
  </StrictMode>
);
