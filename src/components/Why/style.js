import styled from "styled-components";
import { ReactComponent as cardMessage } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as cardCalculator } from "../../assets/icons/calculator.svg";
const Container = styled.div`
  width: 100%;
  background: #f5f7fc;
  margin-top: 48px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 130px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Header.Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin: 10px 0;
`;

Header.Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;
const Message = styled(cardMessage)`
  & path {
    fill: #0061df;
  }
  width: 50px;
  height: 50px;
`;
const House = styled(cardHouse)`
  & path {
    fill: #0061df;
  }
  width: 50px;
  height: 50px;
`;
const Maps = styled(cardMaps)`
  & path {
    fill: #0061df;
  }
  width: 50px;
  height: 50px;
`;
const Calculator = styled(cardCalculator)`
  & path {
    fill: #0061df;
  }
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #0d263b;
  margin-top: 24px;
`;
const Subtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  margin: 8px 0;
  width: 235px;
`;
export {
  Container,
  Wrapper,
  Header,
  Body,
  Message,
  House,
  Maps,
  Calculator,
  Title,
  Subtitle,
};
