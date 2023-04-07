import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Container,
  Content,
  Description,
  Like,
  LikeAndShare,
  Photos,
  Section,
  Share,
  Wrapper,
} from "./style";
import { Bath, Bed, Car, Ruler } from "../HouseCards/style";
import nouser from "../../assets/img/nouser.jpeg";
import Input from "../../components/generics/input";
import Button from "../../components/generics/Button/index";
const HouseItem = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    // eslint-disable-next-line
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/id/${params?.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);

        // window.scrollTo(0, 0);
      });
  }, [params?.id]);
  console.log(data, "data");
  return (
    <Container>
      <Photos></Photos>
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
                <Container.IconCon>
                  <Calendar />
                  <Container.IconText>
                    {`${data?.area || 1200}`} Sq Ft
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
                <div style={{ display: "flex", alignItems: "center" }}>
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
            <p style={{ marginTop: "auto" }}>Show more</p>
          </Content>
          {/* Description */}
          <Content
            style={{ width: "100%", height: "65px" }}
            marginTop={30}
            center={"flex-start"}
            jc={"flex-start"}
          >
            <h1 className="title">Documents</h1>
            <Section>
              test_property.pdf DOWNLOAD test_property.pdf DOWNLOAD
              test_property.pdf DOWNLOAD
            </Section>
            <p style={{ marginTop: "16px" }} className="info"></p>
          </Content>
        </Section>
        <Wrapper.Card>
          <Wrapper.CardHeader>
            <Wrapper.User src={nouser} />
            <div>
              <h1 className="subTitle">Darrel Steward</h1>
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
            <input type="checkbox" style={{ width: "18px", height: "18px" }} />
            <p style={{ margin: "0" }} className="info">
              By submitting this form I agree to Terms of Use
            </p>
          </Content>
          <Button width={100} type={"blue"}>
            Send request
          </Button>
        </Wrapper.Card>
      </Wrapper>
    </Container>
  );
};
export default HouseItem;
