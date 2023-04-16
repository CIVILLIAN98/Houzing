import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard ";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Header } from "../Recommended/style";
import useRequest from "../../hooks/useRequest";

const CategoryCarousel = () => {
  const request = useRequest();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    dots: true,
  };

  useEffect(() => {
    // eslint-disable-next-line
    request({ url: `/categories/list`, token: true }).then((res) => {
      setData(res?.data || []);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Header>
        <Header.Title>Category</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
      <Slider {...settings}>
        {data.map((val) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${val.id}`)}
              data={val}
              key={val.id}
            />
          );
        })}
      </Slider>
    </Container>
  );
};
export default CategoryCarousel;
