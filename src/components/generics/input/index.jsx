import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = forwardRef(
  (
    {
      onChange,
      icon,
      type,
      height,
      width,
      placeholder,
      defaultValue,
      value,
      name,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          name={name}
          ref={ref}
          onChange={onChange}
          type={type}
          height={height}
          width={width}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
        />
      </Wrapper>
    );
  }
);

export default Input;
