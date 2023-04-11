import React, { useContext } from "react";
import { Container, Bed, Bath, Ruler, Car, Like, Resize } from "./style";
import noimage from "../../assets/img/noimg.jpeg";
import nouser from "../../assets/img/nouser.jpeg";
import { message } from "antd";
import { PropertiesContext } from "../../Context/properties";
// import { useState } from "react";

const HouseCard = ({ data = {}, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    attachments,
    salePrice,
    price,
    city,
    country,
    description,
    houseDetails,
    address,
    category,
    favorite,
    id,
  } = data;

  const save = (event) => {
    event.stopPropagation();
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Disliked");
        else res?.success && message.info("Liked");
        refetch && refetch();
      });
  };
  return (
    <Container onClick={onClick}>
      <Container.ImgCon>
        <Container.Img
          src={(attachments && attachments[0]?.imgPath) || noimage}
        />
      </Container.ImgCon>
      <Container.Body>
        <Container.Ava src={nouser} alt="" width={38} height={38} />
        <Container.Texts>
          <Container.Title>
            {city},{country},{description}
          </Container.Title>
          <Container.Subtitle>
            {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
            {category?.name || "category"} {`${houseDetails?.room}`}-rooms
          </Container.Subtitle>
        </Container.Texts>
        <Container.Icons>
          <Container.IconCon>
            <Bed />
            <Container.IconText>
              {`${houseDetails?.beds || 4}`} Beds
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Bath />
            <Container.IconText>
              {`${houseDetails?.bath || 5}`} Baths
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Car />
            <Container.IconText>
              {`${houseDetails?.garage || 1}`} Garage
            </Container.IconText>
          </Container.IconCon>
          <Container.IconCon>
            <Ruler />
            <Container.IconText>
              {`${houseDetails?.area || 1200}`} Sq Ft
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
            onClick={save}
            favorite={favorite}
            style={{
              width: "38px",
              height: "38px",
            }}
          >
            <Like favorite={favorite} />
          </Like.Con>
        </Container.FooterIcons>
      </Container.Footer>
    </Container>
  );
};
export default HouseCard;
