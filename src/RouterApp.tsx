import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePages from "./Pages/HomePage";
import { Triangle } from "react-loader-spinner";
import DetailPages from "./Pages/DetailPage";
import NavbarNavs from "./Components/Navbar/NavbarNav";
import Footers from "./Components/Footer/FooterView";
import MoreGameTests from "./Components/Slider/MoreGameTest";
const router = createBrowserRouter([
  { path: "/", element: <HomePages /> },
  { path: "/games/:id", element: <DetailPages /> },
  { path: "/gallery", element: <MoreGameTests /> },
]);
const RouterApps = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen ">
        <Triangle
          visible={true}
          height="100"
          width="100"
          color="#1e3e8a"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p className="px-5 font-bold text-blue-900 text-inherit text-1xl text-shadow">
          Stick Chain
        </p>
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
