import styled from "styled-components";
import { ReactComponent as gps } from "../../assets/icons/map.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as message } from "../../assets/icons/email.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
const Container = styled.div`
  width: 100%;
  background: #0d263b;
`;
const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 300px;
`;
Header.Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 8px 0;
`;

const Body = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 48px;
  margin: 0 auto;
  padding-top: 48px !important;
  padding: 0 130px;
`;
const Gps = styled(gps)`
  margin-right: 21px;
  width: 35px;
  height: 35px;
  & path {
    fill: #0061df;
  }
`;
const Phone = styled(phone)`
  & path {
    fill: #0061df;
  }
  margin-right: 21px;
  width: 18px;
  height: 18px;
`;
const Email = styled(message)`
  & path {
    fill: #0061df;
  }
  margin-right: 21px;
  width: 18px;
  height: 18px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: white;
  margin-bottom: 32px;
`;
const Subtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: white;
`;
const IconsCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
IconsCon.Item = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    & path {
      fill: black;
    }
  }
  border-radius: 3px;
`;
IconsCon.Facebook = styled(facebook)``;
IconsCon.Twitter = styled(twitter)``;
IconsCon.Instagram = styled(instagram)``;
IconsCon.Linkedin = styled(linkedin)``;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 130px;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    transform: scale(1.3);
  }
`;

Section.LogoImg = styled(logo)`
  & path {
    fill: #ffff;
  }
  margin-right: 12px;
`;
Section.Title = styled.h3`
  color: #ffffff;
`;
Bottom.Copyright = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
export {
  Container,
  Wrapper,
  Header,
  Body,
  Gps,
  Phone,
  Title,
  Subtitle,
  Email,
  IconsCon,
  Bottom,
  Section,
};
