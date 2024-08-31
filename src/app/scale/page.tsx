import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";
import React from "react";

const SalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
};

export default SalePage;
