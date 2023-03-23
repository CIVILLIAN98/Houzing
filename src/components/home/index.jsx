import React from "react";
import CategoryCarousel from "../Category_carousel";

import MainCarousel from "../main Carousel";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <MainCarousel />
      <CategoryCarousel />
    </Container>
  );
};

export default Home;
