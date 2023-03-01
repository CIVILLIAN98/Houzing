import React from "react";
import { Container } from "./style";

const Input = (props) => {
  return (
    <Container
      onChange={props.onChange}
      type={props.type}
      height={props.height}
      width={props.width}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={props.value}
    >
      {props.children}
    </Container>
  );
};

export default Input;
