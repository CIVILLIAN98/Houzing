import React from "react";
import Button from "../generics/Button";
import Input from "../generics/input";
import { Container, Icons } from "./styled";

const Filter = () => {
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />

      <Button type="light">
        <Icons>
          <Icons.Advanced />
        </Icons>
        Advanced
      </Button>
      <Button width="180" type="blue">
        Search
      </Button>
    </Container>
  );
};

export default Filter;
