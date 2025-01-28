import React from "react";
const ExploreHeros = React.lazy(() => import("../Views/Explore/ExploreHero"));
const ExploreGames = React.lazy(() => import("../Views/Explore/ExploreGame"));

const ExplorePages = () => {
  return (
    <>
      <ExploreHeros />
      <ExploreGames />
    </>
  );
};

export default ExplorePages;
