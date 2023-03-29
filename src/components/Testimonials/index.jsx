import React from "react";
import { Container, Header, Wrapper } from "./style";
import Slider from "react-slick";

import TestimonialCard from "../Testimonial card";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

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
