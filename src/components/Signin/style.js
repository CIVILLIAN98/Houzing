import styled from "styled-components";

const Container = styled.div`
  margin: 64px auto;
  width: 100%;
  max-width: 580px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
`;
Container.Header = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0d263b;
`;
export { Container };
