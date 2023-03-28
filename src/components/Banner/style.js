import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 571px !important;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 571px !important;
`;

const Blur = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 134px 0;
`;
Content.Title = styled.h1`
  width: 567px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 48px;
`;

export { Container, Img, Blur, Content };
