import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Navlinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 80px;
  background-color: blue;
  border-radius: 25px;
  color: #fff;
  width: 100%;
  color: white;
  list-style-type: none;
  cursor: pointer;
  font-size: 32px;
`;
export { Container, Wrapper, Navlinks };
