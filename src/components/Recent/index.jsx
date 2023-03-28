import React, { useEffect, useState } from "react";
import { Container, Header } from "./style";
import HouseCard from "../HouseCards/index";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Recent = () => {
  // eslint-disable-next-line
  const { REACT_APP_BASE_URL: Http } = process.env;
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

  useEffect(() => {
    // eslint-disable-next-line
    fetch(`${Http}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [Http]);

  return (
    <Container>
      <Header>
        <Header.Title>Recent Properties for Rent</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
      <Slider {...settings}>
        {data.map((val) => {
          return (
            <HouseCard
              onClick={() => navigate(`/properties`)}
              data={val}
              key={val.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Recent;
