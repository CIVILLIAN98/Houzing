import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 280px;
  min-width: 243px;
  height: 350px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px !important;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

Container.Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px !important;
`;

const Blur = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px !important;
`;
export { Container, Blur, Content };
