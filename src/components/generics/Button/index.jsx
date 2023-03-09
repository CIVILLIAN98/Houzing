import React from "react";
import { Container } from "./style";

const Button = (props) => {
  return (
    <Container
      onClick={props.onClick}
      type={props.type}
      height={props.height}
      width={props.width}
      margin={props.margin}
      mt={props.mt}
    >
      {props.children}
    </Container>
  );
};

export default Button;
