import React from "react";
import { Container, Blur, Content } from "./style";
import noimage from "../../assets/img/noimg.jpeg";
import category from "../../assets/img/category.png";
const CategoryCard = ({ data = {} }) => {
  const { name } = data;

  return (
    <Container>
      <Blur />
      <Container.Img src={category || noimage} />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};
export default CategoryCard;
