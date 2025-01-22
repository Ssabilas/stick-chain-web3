import { ReactElement } from "react";
import HomeHeros from "../Views/Home/HomeHero";
import ListPopularGameCards from "../Views/Home/ListPopularGameCard";
import ListGameCards from "../Views/Home/ListGameCard";

const HomePages = (): ReactElement => {
  return (
    <>
      <HomeHeros />
      <ListPopularGameCards />
      <ListGameCards />
    </>
  );
};

export default HomePages;
