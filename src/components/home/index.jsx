import React from "react";
import HouseCard from "../HouseCards";
import MainCarousel from "../main Carousel";
import { Container, Wrapper } from "./styled";

// For testing you can use [house1] below to check out if the img prop is working

import house1 from "../../assets/img/house1.png";
import Filter from "../filter";
const Home = () => {
  return (
    <Container>
      <Filter />
      <MainCarousel />
      <Wrapper>
        <HouseCard img={house1} />
      </Wrapper>
    </Container>
  );
};

export default Home;
