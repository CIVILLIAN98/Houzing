import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 380px));
  grid-auto-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding);
  grid-gap: 10px;
  max-width: 1440px;
  margin: auto;
  min-height: 600px;
`;

const Header = styled.div`
  text-align: center;
  margin: 64px auto;
`;
Header.Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
`;
Header.Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
export { Container, Header };
