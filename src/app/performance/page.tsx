import React from "react";
import performanceImg from "/public/performance.jpg";
import Hero from "@/components/hero";
const page = () => {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high performance"
      />
    </div>
  );
};

export default page;
