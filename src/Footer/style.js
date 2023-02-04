import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: blue;
  height: 200px;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Refrences = styled.div`
  max-width: 480px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Credits = styled.div`
  max-width: 470px;
  height: 200px;
  margin-right: 10px;
  color: white;
`;
export { Container, Wrapper, Refrences, Credits };
