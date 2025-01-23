// Utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "/assets/Logo.png";
import { FallingLines } from "react-loader-spinner";

// Pages
import NavbarNavs from "./Components/Navbar/NavbarNav";
import Footers from "./Components/Footer/FooterView";
import HomePages from "./Pages/HomePage";
import DetailPages from "./Pages/DetailPage";
import RecommendPages from "./Pages/RecommendPage";
import ExplorePages from "./Pages/ExplorePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePages /> },
  { path: "/games/:id", element: <DetailPages /> },
  { path: "/games/recommendation", element: <RecommendPages /> },
  { path: "/games/explore", element: <ExplorePages /> },
]);
const RouterApps = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen ">
        <FallingLines visible={true} height="100" width="100" color="#00E5FF" />
        <img src={Logo} alt="Logo Images" />
      </div>
    );
  }

  return (
    <>
      <NavbarNavs />
      <RouterProvider router={router} />
      <Footers />
    </>
  );
};

export default RouterApps;
