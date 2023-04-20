import React, { useRef } from "react";
import { Carousel } from "antd";
import { Container, Img, Blur, Content } from "./style";
import house1 from "../../assets/img/house1.png";
import house2 from "../../assets/img/house2.png";
import Button from "../generics/Button";

const Banner = () => {
  const SLiderRef = useRef();

  return (
    <Container>
      <Carousel ref={SLiderRef} autoplay={true}>
        <Img src={house2} alt={house1 || "no IMG"} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>

        <Button width={180} type="blue" mt={48}>
          Read more
        </Button>
      </Content>
    </Container>
  );
};
export default Banner;
