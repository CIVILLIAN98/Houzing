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
export { Container };
