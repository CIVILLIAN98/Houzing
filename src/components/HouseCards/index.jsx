import React from "react";
import { Container, Bed, Bath, Ruler, Car, Like, Resize } from "./style";
import noimage from "../../assets/img/noimg.jpeg";
import nouser from "../../assets/img/nouser.jpeg";
import { useState } from "react";

// onclick = "document.getElementById('id1').style.color = 'red'";

const HouseCard = ({ data }) => {
  const {
    salePrice,
    price,
    city,
    country,
    description,
    houseDetails,
    address,
    attachments,
  } = data;
  console.log(data);
  const [like, setLike] = useState(false);

  const changestyle = () => {
    console.log("color changed");
    return setLike((current) => !current);
  };

  return (
    <Container>
      <Container.ImgCon>
        <Container.Img src={attachments[0]?.imgPath || noimage} />
      </Container.ImgCon>
      <Container.Body>
        <Container.Ava src={nouser} alt="" width={38} height={38} />
        <Container.Texts>
          <Container.Title>
            {city},{country},{description}
          </Container.Title>
          <Container.Subtitle>
            {address || "Quincy St, Brooklyn, NY, USA"}
          </Container.Subtitle>
        </Container.Texts>
        <Container.Icons>
          <Container.IconCon>
            <Bed />
            <Container.IconText>
              {`${houseDetails.beds || 4}`} Beds
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Bath />
            <Container.IconText>
              {`${houseDetails.bath || 5}`} Baths
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Car />
            <Container.IconText>
              {`${houseDetails.garage || 1}`} Garage
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Ruler />
            <Container.IconText>
              {`${houseDetails.area || 1200}`} Sq Ft
            </Container.IconText>
          </Container.IconCon>
        </Container.Icons>
      </Container.Body>
      <Container.Footer>
        <Container.FooterPrice>
          <Container.FalsePrice>${salePrice || 0}/mo</Container.FalsePrice>
          <Container.RealPrice>${price || 0}/mo</Container.RealPrice>
        </Container.FooterPrice>
        <Container.FooterIcons>
          <Resize />
          <Like.Con
            onClick={() => changestyle()}
            style={{
              width: "38px",
              height: "38px",
              background: !like ? "#F6F8F9" : "red",
            }}
          >
            <Like />
          </Like.Con>
        </Container.FooterIcons>
      </Container.Footer>
    </Container>
  );
};
export default HouseCard;
