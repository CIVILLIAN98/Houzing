import React from "react";
import { Container } from "./style";

import freak from "../../assets/img/nouser.jpeg";
const HouseCard = ({ img, alt }) => {
  return (
    <Container>
      <Container.ImgCon>
        <Container.Img src={img} alt={alt} />
      </Container.ImgCon>
      <Container.Body>
        <Container.Ava src={freak} alt="" width={38} height={38} />
      </Container.Body>
    </Container>
  );
};
export default HouseCard;
