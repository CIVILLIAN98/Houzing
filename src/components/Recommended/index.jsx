import React, { useEffect, useState } from "react";
import { Container, Header } from "./style";
import HouseCard from "../HouseCards/index";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const Recommended = () => {
  const [data, setData] = useState([]);
  const request = useRequest();
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
    request({ url: `/houses/list`, token: true })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header>
        <Header.Title>Recommended</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
      <Slider {...settings}>
        {data.map((val) => {
          return (
            <HouseCard
              onClick={() => navigate(`/properties/${val.id}`)}
              data={val}
              key={val.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default Recommended;
