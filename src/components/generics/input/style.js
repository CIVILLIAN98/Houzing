import styled from "styled-components";

const Container = styled.input`
  min-width: 120px;
  border-radius: 2px;
  outline: none;
  color: black;
  line-height: 20px;
  border: 1px solid #e6e9ec;
  padding: 0 44px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : "14px")};
  height: ${({ height }) => (height ? `${height}` : "44px")};
  width: ${({ width }) => (width ? `${width}` : "100%")};
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: ${({ width }) => (width ? `${width}` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 15px;
`;
export { Container, Wrapper, Icon };
