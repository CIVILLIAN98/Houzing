import styled from "styled-components";

const Container = styled.div`
  width: 380px;
  height: 429px;
  margin: 100px auto;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  position: relative;
`;

Container.ImgCon = styled.div`
  width: 100%;
  height: 50%;
  background-color: blue;
`;

Container.Img = styled.img`
  width: 100%;
  height: 100%;
`;

Container.Body = styled.div`
  width: 100%;
  height: 50%;
  background-color: green;
`;
Container.Ava = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 310px;
  top: 191px;
  border-radius: 50%;
`;

export { Container };
