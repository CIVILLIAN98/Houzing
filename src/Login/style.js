import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  border-radius: 25px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
Container.Header = styled.h1`
  width: 50%;
  border-radius: 25px;
  background-color: brown;
  color: #ffff;
`;
export { Container };
