import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard ";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Header } from "../Recommended/style";

const CategoryCarousel = () => {
  const { REACT_APP_BASE_URL } = process.env;
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
    fetch(`${REACT_APP_BASE_URL}/categories/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line
  }, [REACT_APP_BASE_URL]);
  console.log(data, "category data");
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
