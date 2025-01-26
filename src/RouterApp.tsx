// Utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "/assets/Logo.png";
import { FallingLines } from "react-loader-spinner";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

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
  { path: "explore", element: <ExplorePages /> },
]);
const RouterApps = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
      <ScrollContainer
        continuousScrolling={true}
        activeSmoothScrollOnTouchDevice={true}
        renderByPixels={true}
        damping={0.2}
      >
        <RouterProvider router={router} />
        <Footers />
      </ScrollContainer>
    </>
  );
};

export default RouterApps;
