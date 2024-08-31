import reliabilityImg from "/public/reliability.jpg";
import Hero from "@/components/hero";
import React from "react";

const ReliabilityPage = () => {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="welding"
      title="Super high reliability hosting"
    />
  );
};

export default ReliabilityPage;
