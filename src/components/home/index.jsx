import React from "react";
import Banner from "../Banner";
import CategoryCarousel from "../Category_carousel";

import MainCarousel from "../main Carousel";
import Recent from "../Recent";
import Recommended from "../Recommended";
import Why from "../Why";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <MainCarousel />
      <Recommended />
      <Why />
      <CategoryCarousel />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
