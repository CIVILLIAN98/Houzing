import React from "react";
import {
  Container,
  Wrapper,
  Header,
  Body,
  Message,
  House,
  Maps,
  Calculator,
  Title,
  Subtitle,
} from "./style";

const Why = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Header.Title>Why Choose Us?</Header.Title>
          <Header.Subtitle>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </Header.Subtitle>
        </Header>
        <Body>
          <Header>
            <Message />
            <Title>Trusted By Thousands</Title>
            <Subtitle>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Subtitle>
          </Header>
          <Header>
            <House />
            <Title>Wide Renge Of Properties</Title>
            <Subtitle>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Subtitle>
          </Header>
          <Header>
            <Calculator />
            <Title>Financing Made Easy</Title>
            <Subtitle>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Subtitle>
          </Header>
          <Header>
            <Maps />
            <Title>See Neighborhoods</Title>
            <Subtitle>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Subtitle>
          </Header>
        </Body>
      </Wrapper>
    </Container>
  );
};
export default Why;
