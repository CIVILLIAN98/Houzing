import React from "react";
import { Container, Blur, Content } from "./style";
import noimage from "../../assets/img/noimg.jpeg";
import category from "../../assets/img/category.png";
const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Blur />
      <Container.Img src={category || noimage} />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};
export default CategoryCard;
// adddd
