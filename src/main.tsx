import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "remixicon/fonts/remixicon.css";
import "./css/input.css";
import "./css/output.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import App from "./App.tsx";
import NavbarNavs from "./components/Navbar/NavbarNav";
import HomePages from "./Pages/HomePage";

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
      <BrowserRouter>
        <NavbarNavs />
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
        </Routes>
      </BrowserRouter>
    </MetaMaskProvider>
  </StrictMode>
);
