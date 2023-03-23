import styled from "styled-components";

const Container = styled.input`
  border-radius: 2px;
  width: 100%;
  outline: none;
  color: black;
  line-height: 20px;
  border: 1px solid #e6e9ec;
  padding: 0 44px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "14px")};
  height: ${({ height }) => (height ? `${height}` : "44px")};
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (!width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 15px;
`;
export { Container, Wrapper, Icon };
