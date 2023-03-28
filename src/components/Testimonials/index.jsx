import React, { useEffect, useState } from "react";
import { Container, Header, Wrapper } from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import TestimonialCard from "../Testimonial card";

const Testimonials = () => {
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
      <Wrapper>
        <Header>
          <Header.Title>Testimonials Properties for Rent</Header.Title>
          <Header.Subtitle>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </Header.Subtitle>
        </Header>
        <Slider {...settings}>
          <TestimonialCard text="“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “" />
          <TestimonialCard text="“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “" />
          <TestimonialCard text="“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “" />
          <TestimonialCard text="“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “" />
        </Slider>
      </Wrapper>
    </Container>
  );
};
export default Testimonials;
