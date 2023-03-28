import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 96px 130px;
  position: relative;
`;
const Header = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Header.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin: 10px 0;
`;
Header.Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
export { Container, Header };
