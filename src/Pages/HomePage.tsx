import { ReactElement } from "react";
import HomeHeros from "../Views/Home/HomeHero";
import ListMainGameCards from "../Views/Home/ListMainGameCard";
import ListSecondGameCards from "../Views/Home/ListSecondGameCard";

const HomePages = (): ReactElement => {
  return (
    <>
      <HomeHeros />
      <ListMainGameCards />
      <ListSecondGameCards />
    </>
  );
};

export default HomePages;
