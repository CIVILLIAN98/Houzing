import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Container,
  Content,
  Description,
  Like,
  LikeAndShare,
  Blur,
  Section,
  Share,
  Wrapper,
  ImgContainer,
  ImageContainer,
} from "./style";
import { Bath, Bed, Car, Ruler } from "../HouseCards/style";
import nouser from "../../assets/img/nouser.jpeg";
import Input from "../../components/generics/input";
import Button from "../../components/generics/Button/index";
import { Checkbox } from "antd";
import { Yandex } from "../generics/YandexMap";
import Recent from "../Recent";
import noimg from "../../assets/img/noimg.png";
import useRequest from "../../hooks/useRequest";

const HouseItem = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const request = useRequest();
  useEffect(() => {
    request({
      url: `/houses/id/${params?.id}`,
      token: true,
    }).then((res) => {
      setData(res?.data);
    });
    // eslint-disable-next-line
  }, [params?.id]);

  return (
    <React.Fragment>
      <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          alt="test"
        />

        <ImgContainer>
          {data?.attachments &&
            data?.attachments?.slice(1, 5).map((value, index) => {
              return data?.attachments?.length > 5 && index === 3 ? (
                <Blur.Container key={value.id}>
                  <ImageContainer.Subimg
                    key={value.id}
                    src={value?.imgPath}
                    alt="test"
                  />
                  <Blur>+{data?.attachments?.length - 5}</Blur>
                </Blur.Container>
              ) : (
                <ImageContainer.Subimg
                  key={value.id}
                  src={value?.imgPath}
                  alt="test"
                />
              );
            })}
        </ImgContainer>
      </ImageContainer>
      <Container>
        <Wrapper>
          <Section width={100} column={"column"}>
            <Section>
              <Content
                center
                jc={"center"}
                style={{ width: "100% !important" }}
                width={570}
              >
                <p className="title">{data?.name}</p>
                <div className="info">
                  {data?.address}, {data?.city}, {data?.country}
                </div>
                <Container.Icons>
                  <Container.IconCon>
                    <Bed />
                    <Container.IconText>
                      {`${data?.houseDetails?.beds || 4}`} Beds
                    </Container.IconText>
                  </Container.IconCon>
                  <Container.IconCon>
                    <Bath />
                    <Container.IconText>
                      {`${data?.houseDetails?.bath || 5}`} Baths
                    </Container.IconText>
                  </Container.IconCon>
                  <Container.IconCon>
                    <Car />
                    <Container.IconText>
                      {`${data?.houseDetails?.garage || 1}`} Garage
                    </Container.IconText>
                  </Container.IconCon>
                  <Container.IconCon>
                    <Ruler />
                    <Container.IconText>
                      {`${data?.houseDetails?.area || 1200}`} Sq Ft
                    </Container.IconText>
                  </Container.IconCon>
                  <Container.IconCon>
                    <Calendar />
                    <Container.IconText>
                      {`${data?.houseDetails?.yearBuilt || 1999}`} Sq Ft
                    </Container.IconText>
                  </Container.IconCon>
                </Container.Icons>
              </Content>
              {/* likes */}
              <Content jc={"flex-start"} width={200} center={"flex-end"}>
                <LikeAndShare>
                  <Content.Icon>
                    <Content.Iconstyle>
                      <Share />
                    </Content.Iconstyle>
                    <Content.Text style={{ margin: "0" }} className="info">
                      Share
                    </Content.Text>
                  </Content.Icon>
                  <Content.Icon>
                    <Content.Iconstyle>
                      <Like />
                    </Content.Iconstyle>
                    <Content.Text style={{ margin: "0" }} className="info">
                      Save
                    </Content.Text>
                  </Content.Icon>
                </LikeAndShare>
                <Content center={"flex-start"} jc={"flex-end"} marginTop={25}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Container.FalsePrice>
                      ${data?.salePrice || 0}/mo
                    </Container.FalsePrice>
                    <Container.RealPrice>
                      ${data?.price || 0}/mo
                    </Container.RealPrice>
                  </div>
                  <div
                    className="info"
                    style={{ textAlign: "right", width: "100%" }}
                  >
                    {" "}
                    {data?.user?.firstname}
                  </div>
                </Content>
              </Content>
            </Section>

            {/* Description */}
            <Content
              style={{ width: "100%" }}
              marginTop={30}
              center={"flex-start"}
              jc={"flex-start"}
              bc={false}
            >
              <h1 className="title">Description</h1>
              <Description style={{ marginTop: "16px" }} className="info">
                {data?.description}
              </Description>
            </Content>
            <h1 className="title" style={{ marginTop: "50px" }}>
              Features
            </h1>
            <Section margin={"50px 0"}>
              <Content gap={30}>
                <Container.IconCon>
                  <Bed />
                  <Container.IconText>
                    {`${data?.houseDetails?.beds || 4}`} Beds
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Bath />
                  <Container.IconText>
                    {`${data?.houseDetails?.bath || 5}`} Baths
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Car />
                  <Container.IconText>
                    {`${data?.houseDetails?.garage || 1}`} Garage
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Ruler />
                  <Container.IconText>
                    {`${data?.houseDetails?.area || 1200}`} Sq Ft
                  </Container.IconText>
                </Container.IconCon>
              </Content>
              <Content gap={30}>
                <Container.IconCon>
                  <Bed />
                  <Container.IconText>
                    {`${data?.houseDetails?.beds || 4}`} Beds
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Bath />
                  <Container.IconText>
                    {`${data?.houseDetails?.bath || 5}`} Baths
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Car />
                  <Container.IconText>
                    {`${data?.houseDetails?.garage || 1}`} Garage
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Ruler />
                  <Container.IconText>
                    {`${data?.houseDetails?.area || 1200}`} Sq Ft
                  </Container.IconText>
                </Container.IconCon>
              </Content>
              <Content gap={30}>
                <Container.IconCon>
                  <Bed />
                  <Container.IconText>
                    {`${data?.houseDetails?.beds || 4}`} Beds
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Bath />
                  <Container.IconText>
                    {`${data?.bath || 5}`} Baths
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Car />
                  <Container.IconText>
                    {`${data?.garage || 1}`} Garage
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Ruler />
                  <Container.IconText>
                    {`${data?.area || 1200}`} Sq Ft
                  </Container.IconText>
                </Container.IconCon>
              </Content>
              <Content gap={30}>
                <Container.IconCon>
                  <Bed />
                  <Container.IconText>
                    {`${data?.beds || 4}`} Beds
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Bath />
                  <Container.IconText>
                    {`${data?.bath || 5}`} Baths
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Car />
                  <Container.IconText>
                    {`${data?.garage || 1}`} Garage
                  </Container.IconText>
                </Container.IconCon>
                <Container.IconCon>
                  <Ruler />
                  <Container.IconText>
                    {`${data?.area || 1200}`} Sq Ft
                  </Container.IconText>
                </Container.IconCon>
              </Content>
            </Section>
          </Section>

          <Wrapper.Card>
            <Wrapper.CardHeader>
              <Wrapper.User src={nouser} />
              <div>
                <h1 className="subTitle">
                  {data?.user?.firstname} {data?.user?.lastname}
                </h1>
                <h3 className="info">(123)456-7890</h3>
              </div>
            </Wrapper.CardHeader>
            <Input padding={"0px"} placeholder="Name" border={"none"} />
            <Input padding={"0px"} placeholder="Phone" border={"none"} />
            <Input padding={"0px"} placeholder="Email" border={"none"} />
            <Content center={"flex-start"} marginTop={24}>
              <p className="subTitle">Message</p>
              <p style={{ borderBottom: "2px solid #0D263B" }} className="info">
                Hello, I am interested in [New Apartment]
              </p>
            </Content>
            <Content
              flex
              jc={"center"}
              marginTop={24}
              center={"flex-start"}
              gap={8}
            >
              <Checkbox>
                By submitting this form I agree to Terms of Use
              </Checkbox>
              {/* <input type="checkbox" style={{ width: "18px", height: "18px" }} />
            <p style={{ margin: "0" }} className="info"></p> */}
            </Content>
            <Button width={100} type={"blue"}>
              Send request
            </Button>
          </Wrapper.Card>
        </Wrapper>
        <h1 style={{ marginBottom: "30px" }}>Location</h1>
        <Yandex />
      </Container>
      <Recent />
    </React.Fragment>
  );
};
export default HouseItem;
