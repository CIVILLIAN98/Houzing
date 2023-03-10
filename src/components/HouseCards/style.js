import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as like } from "../../assets/icons/like.svg";
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
`;

Container.Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

Container.Body = styled.div`
  width: 100%;
  padding: 0 20px;
`;
Container.Ava = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  border: 4px solid white;
  right: 20px;
  top: 198px;
  border-radius: 50%;
`;
Container.Texts = styled.div`
  margin-top: 24px;
`;
Container.Title = styled.h6`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
Container.Subtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
Container.IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
Container.Icons = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;
Container.IconText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Bed = styled(bed)`
  & path {
    background: #696969;
  }
`;
const Bath = styled(bath)`
  & path {
    background: #696969;
  }
`;
const Car = styled(car)`
  & path {
    background: #696969;
  }
`;
const Ruler = styled(ruler)`
  & path {
    background: #696969;
  }
`;
const Like = styled(like)`
  border-radius: 50%;
  & path {
    fill: red;
  }
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;
const Resize = styled(resize)`
  cursor: pointer;
  :active {
    transform: scale(0.8);
  }
`;
Container.Footer = styled.div`
  width: 100%;
  height: 60px;
  border-top: 1px solid #e6e9ec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
Container.FooterPrice = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
Container.FalsePrice = styled.del`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
Container.RealPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
Container.FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 35px;
`;

export { Container, Bed, Bath, Ruler, Car, Like, Resize };
