import React from "react";
import HouseCard from "../HouseCards";
import MainCarousel from "../main Carousel";
import { Container, Wrapper } from "./styled";
import house1 from "../../assets/img/house1.png";
const Home = () => {
  return (
    <Container>
      <MainCarousel />
      <Wrapper>
        <HouseCard img={house1} alt={"house1"} />
      </Wrapper>
    </Container>
  );
};

export default Home;
