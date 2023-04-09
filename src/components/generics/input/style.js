import styled from "styled-components";

const Container = styled.input`
  border-radius: 2px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  color: black;
  line-height: 20px;
  border: ${({ border }) => (border ? `${border}` : "1px solid #E6E9EC")};
  :focus {
    border: 2px solid #0061df;
  }
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `${borderBottom}` : "1px solid #E6E9EC"};
  padding: ${({ padding }) => (padding ? `${padding}` : "0 44px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "14px")};
  height: ${({ height }) => (height ? `${height}` : "44px")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ wr }) => `${wr}`};
`;
const Icon = styled.div`
  position: absolute;
  left: 15px;
`;
export { Container, Wrapper, Icon };
