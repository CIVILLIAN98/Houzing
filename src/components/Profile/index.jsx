import React from "react";
import { Container, Wrapper } from "./style";
import Favourite from "../Favourite";

export const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Favourite />
      </Wrapper>
    </Container>
  );
};
