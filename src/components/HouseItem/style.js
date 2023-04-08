import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto !important;
  justify-content: center;
  width: 100%;
  max-width: 1440px;

  padding: var(--padding);
  justify-content: flex-start;
  /* align-items: center; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
Wrapper.Card = styled.div`
  max-width: 280px;
  width: 100%;
  height: 476px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  /* background-color: red; */
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
Wrapper.CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
Wrapper.User = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;
const Photos = styled.div`
  min-height: 400px;
  width: 100%;
  background-color: blue;
  margin: 24px auto;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? `${column}` : "row")};
  justify-content: space-between;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0")};
  width: ${({ width }) => (width ? `${width}%` : "")};
  margin: ${({ margin }) => `${margin}`};
`;
const Content = styled.div`
  display: flex;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0")};
  width: ${({ width }) => (width ? `${width}px` : "")};
  align-items: ${({ center }) => (center ? `${center}` : "center")};
  flex-direction: ${({ flex }) => !flex && "column"};
  justify-content: ${({ jc }) => (jc ? `${jc}` : "space-between")};
  gap: ${({ gap }) => (gap ? `${gap}px` : 0)};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0")};
`;
const Description = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;
Content.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const LikeAndShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;
Content.Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
Content.Iconstyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #f6f8f9;
  border-radius: 50%;
  gap: 25px;
`;
// Icons
const Share = styled(share)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
const Like = styled(love)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
const Calendar = styled(calendar)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

Container.IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
Container.Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;
Container.IconText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
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
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

export {
  Container,
  Wrapper,
  Photos,
  Section,
  Content,
  Share,
  Like,
  Calendar,
  LikeAndShare,
  Description,
};
