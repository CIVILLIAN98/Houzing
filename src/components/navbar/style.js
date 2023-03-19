import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--backgroundPrimary);
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    transform: scale(1.3);
  }
`;

Section.LogoImg = styled(logo)`
  & path {
    fill: #ffff;
  }
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  color: #ffff;
  text-decoration: none;
  padding: 0 32px;
`;
const CarouselContainer = styled.div`
  width: 100%;
`;
export { Container, Wrapper, Section, Link, Main, CarouselContainer };
