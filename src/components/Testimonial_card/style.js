import styled from "styled-components";

const Container = styled.div`
  background: white;
  width: 380px;
  height: 286px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
  background: #ffffff;

  border-radius: 3px;
  position: relative;
`;
Container.Body = styled.div`
  width: 100%;
  max-width: 343px;
  height: 197px;
  padding: 40px 50px;
`;
Container.Ava = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  border: 4px solid white;
  right: 169px;
  bottom: 70px;
  border-radius: 50%;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
Container.Bottom = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 343px;
  height: 90px;
  background: #f5f7fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Container.Name = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0d263b;
`;

Container.Occupation = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
`;
export { Container, Text };
