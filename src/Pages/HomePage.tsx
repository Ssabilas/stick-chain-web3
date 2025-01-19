import { ReactElement } from "react";
import HeroViews from "../views/Home/HeroView";
import CardListViews from "../views/Home/CardListView";

const HomePages = (): ReactElement => {
  return (
    <>
      <HeroViews />
      <CardListViews />
    </>
  );
};

export default HomePages;
