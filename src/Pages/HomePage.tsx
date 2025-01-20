import { ReactElement } from "react";
import HomeHeros from "../views/Home/HomeHero";
import ListPopularGameCards from "../views/Home/ListPopularGameCard";
import ListGameCards from "../views/Home/ListGameCard";

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
