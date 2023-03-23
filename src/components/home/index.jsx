import React from "react";

import CategoryCard from "../CategoryCard ";
import HouseCard from "../HouseCards";
import MainCarousel from "../main Carousel";

import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <MainCarousel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
