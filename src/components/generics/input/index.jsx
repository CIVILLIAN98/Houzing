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
      border,
      padding,
      borderBottom,
      margin,
      wr,
    },
    ref
  ) => {
    return (
      <Wrapper wr={wr}>
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
          border={border}
          padding={padding}
          borderBottom={borderBottom}
          margin={margin}
        />
      </Wrapper>
    );
  }
);

export default Input;
