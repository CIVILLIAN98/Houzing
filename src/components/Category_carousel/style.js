import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 96px 130px;
  position: relative;
  gap: 20px;
  /* background-color: red; */
`;

const Arrow = styled(arrow)`
  & path {
    fill: white;
  }
  width: 50px;
  height: 50px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  position: absolute;
  top: 50%;
  left: ${({ left }) => left && "20px"};
  right: ${({ right }) => right && "20px"};
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
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
  background: rgba(0, 0, 0, 0.3);
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
  height: 100%;
  padding: 134px 0;
`;
Content.Title = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;
Content.Subtitle = styled.h6`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
Content.Icons = styled.div`
  width: 337px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;
Content.IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
Content.IconText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
const Bed = styled(bed)`
  & path {
    fill: white;
  }
`;
const Bath = styled(bath)`
  & path {
    fill: white;
  }
`;
const Car = styled(car)`
  & path {
    fill: white;
  }
`;
const Ruler = styled(ruler)`
  & path {
    fill: white;
  }
`;
Content.Fee = styled.h3`
  color: white;
`;

export { Container, Arrow, Img, Blur, Content, Bed, Bath, Ruler, Car };
