import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  Header,
  Body,
  Gps,
  Email,
  Title,
  Subtitle,
  Phone,
  IconsCon,
  Bottom,
  Section,
} from "./style";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Body>
          <Header>
            <Title>Contact Us</Title>
            <Header.Item>
              <Gps />
              <Subtitle>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Subtitle>
            </Header.Item>
            <Header.Item>
              <Phone />
              <Subtitle>123 456 7890</Subtitle>
            </Header.Item>
            <Header.Item>
              <Email />
              <Subtitle>support@houzing.com</Subtitle>
            </Header.Item>

            <Header.Item>
              <IconsCon.Item>
                <IconsCon.Facebook />
              </IconsCon.Item>
              <IconsCon.Item>
                <IconsCon.Twitter />
              </IconsCon.Item>
              <IconsCon.Item>
                <IconsCon.Instagram />
              </IconsCon.Item>
              <IconsCon.Item>
                <IconsCon.Linkedin />
              </IconsCon.Item>
            </Header.Item>
          </Header>
          <Header>
            <Title>Discover</Title>
            <Header.Item>
              <Subtitle>Los Angeles</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Miami</Subtitle>
            </Header.Item>

            <Header.Item>
              <Subtitle>New York</Subtitle>
            </Header.Item>
          </Header>
          <Header>
            <Title>Lists by Category</Title>

            <Header.Item>
              <Subtitle>Apartments</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Condos</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Houses</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Offices</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Retail</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Villas</Subtitle>
            </Header.Item>
          </Header>
          <Header>
            <Title>Lists by Category</Title>
            <Header.Item>
              <Subtitle>Terms & Conditions</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Support Center</Subtitle>
            </Header.Item>
            <Header.Item>
              <Subtitle>Contact Us</Subtitle>
            </Header.Item>
          </Header>
        </Body>
        <hr />
        <Bottom>
          <Section onClick={() => navigate("/home")} logo>
            <Section.LogoImg />
            <Section.Title>Houzing</Section.Title>
          </Section>
          <Bottom.Copyright>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </Bottom.Copyright>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
export default Footer;
