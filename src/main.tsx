import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MetaMaskProvider } from "@metamask/sdk-react";
import "crypto-js";
import "remixicon/fonts/remixicon.css";
import "./css/input.css";
import "./css/output.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import App from "./App.tsx";
import NavbarNavs from "./components/Navbar/NavbarNav";
import Footers from "./components/Footer/FooterView";
import HomePages from "./Pages/HomePage";
import DetailPages from "./Pages/DetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePages /> },
  { path: "/games/:id", element: <DetailPages /> },
]);

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
      <NavbarNavs />
      <RouterProvider router={router} />
      <Footers />
    </StrictMode>
  </MetaMaskProvider>
);
