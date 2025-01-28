import React from "react";

const RecommendHeros = React.lazy(
  () => import("../Views/Recommendation/RecommendHero")
);

const RecommendSliders = React.lazy(
  () => import("../Views/Recommendation/RecommendSlider")
);

const RecommendPages = () => {
  return (
    <>
      <RecommendHeros />
      <RecommendSliders />
    </>
  );
};

export default RecommendPages;
