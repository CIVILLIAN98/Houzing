import React from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = (props) => {
  return (
    <Wrapper>
      <Icon>{props.icon}</Icon>
      <Container
        onChange={props.onChange}
        type={props.type}
        height={props.height}
        width={props.width}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
      />
    </Wrapper>
  );
};

export default Input;
