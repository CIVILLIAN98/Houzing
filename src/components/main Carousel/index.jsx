import React, { useRef } from "react";
import { Carousel } from "antd";
import {
  Container,
  Arrow,
  Img,
  Blur,
  Content,
  Bed,
  Bath,
  Ruler,
  Car,
} from "./style";

import house1 from "../../assets/img/house1.png";
import house2 from "../../assets/img/house2.png";
import Button from "../generics/Button";

const MainCarousel = () => {
  const SLiderRef = useRef();

  const OnMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "next") SLiderRef.current.next();
    if (name === "prev") SLiderRef.current.prev();
  };

  return (
    <Container>
      <Carousel
        style={{ position: "relative" }}
        ref={SLiderRef}
        autoplay={true}
      >
        <Img src={house1} alt="house1" />

        <Img src={house2} alt="house2" />

        <Img src={house1} alt="house1" />

        <Img src={house2} alt="house2" />

        <Img src={house1} alt="house1" />

        <Img src={house2} alt="house2" />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Apartment</Content.Title>
        <Content.Subtitle>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Subtitle>
        <Content.Icons>
          <Content.IconCon>
            <Bed />
            <Content.IconText>4 beds</Content.IconText>
          </Content.IconCon>
          <Content.IconCon>
            <Bath />
            <Content.IconText>5 Baths</Content.IconText>
          </Content.IconCon>
          <Content.IconCon>
            <Car />
            <Content.IconText>1 Garage</Content.IconText>
          </Content.IconCon>
          <Content.IconCon>
            <Ruler />
            <Content.IconText>1200 Sq Ft</Content.IconText>
          </Content.IconCon>
        </Content.Icons>
        <Content.Fee>$5,250/mo</Content.Fee>
        <Button width={180} type="dark" mt={48}>
          Read more
        </Button>
      </Content>
      <Arrow data-name="prev" onClick={OnMove} left="true" />
      <Arrow data-name="next" onClick={OnMove} right="true" />
    </Container>
  );
};
export default MainCarousel;
