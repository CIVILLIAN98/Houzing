import styled from "styled-components";

import { ReactComponent as advanced } from "../../assets/icons/setting.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
const Container = styled.div`
  max-width: 1440px;
  width: 100% !important;
  padding: var(--padding);
  display: flex;
  gap: 20px;
  margin: 10px auto;
  position: relative;
`;

const Icons = styled.div``;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Advanced = styled(advanced)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  background-color: #ffff;
`;
Advanced.Header = styled.h1`
  margin-top: 20px;
`;
Advanced.Footer = styled.div`
  width: 100%;
  height: 84px;
  background: #f6f8f9;
  border-radius: 0px 0px 5px 5px;
  margin-top: 10px;
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 50px;
`;
export { Container, Icons, Advanced, Section };
