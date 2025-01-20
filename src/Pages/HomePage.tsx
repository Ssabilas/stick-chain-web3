import { ReactElement } from "react";
import HeroViews from "../views/Home/HeroView";
import ListPopularViews from "../views/Home/ListPopularView";
import ListMoreViews from "../views/Home/ListMoreView";
import FooterViews from "../views/Home/FooterView";

const HomePages = (): ReactElement => {
  return (
    <>
      <HeroViews />
      <ListPopularViews />
      <ListMoreViews />
      <FooterViews />
    </>
  );
};

export default HomePages;
