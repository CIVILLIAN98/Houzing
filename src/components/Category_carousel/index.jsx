import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard ";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const CategoryCarousel = () => {
  const { REACT_APP_BASE_URL: Http } = process.env;
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
    fetch(`${Http}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
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
