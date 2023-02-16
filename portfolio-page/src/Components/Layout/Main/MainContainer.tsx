import Hero from "../../Sections/Hero/Hero";
import TechStack from "../../Sections/TechStack/TechStack";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MainContainer = () => {
  return (
    <div>
      <Hero />
      <TechStack />
    </div>
  );
};

export default MainContainer;
