import React from "react";
import { Container, Text } from "./style";
import nouser from "../../assets/img/nouser.jpeg";

const TestimonialCard = ({ text, name, occupation }) => {
  return (
    <Container>
      <Container.Body>
        <Text>{text}</Text>
      </Container.Body>
      <Container.Ava src={nouser} alt="asd" width={38} height={38} />
      <Container.Bottom>
        <Container.Name>{name || "Marvin McKinney"}</Container.Name>
        <Container.Occupation>{occupation || "Designer"}</Container.Occupation>
      </Container.Bottom>
    </Container>
  );
};
export default TestimonialCard;
