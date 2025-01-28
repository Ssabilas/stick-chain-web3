import React from "react";
const HomeHeros = React.lazy(() => import("../Views/Home/HomeHero"));
const ListMainGameCards = React.lazy(
  () => import("../Views/Home/ListMainGameCard")
);

const ListSecondGameCards = React.lazy(
  () => import("../Views/Home/ListSecondGameCard")
);

const HomePages = () => {
  return (
    <>
      <HomeHeros />
      <ListMainGameCards />
      <ListSecondGameCards />
    </>
  );
};

export default HomePages;
