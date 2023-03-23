import React, { useEffect, useState } from "react";

import { Container } from "./style";
import CategoryCard from "../CategoryCard ";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
// import CategoryCard from "../CategoryCard ";

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
    // appendDots: (dots) => <div>{dots}</div>,
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
              onClick={() => navigate(`/properties?category=${val.name}`)}
              data={val}
              key={val.id}
            />
          );
        })}
      </Slider>
      {/* <Carousel ref={SLiderRef} autoplay={true}></Carousel>
      <Arrow data-name="prev" onClick={OnMove} left="true" />
      <Arrow data-name="next" onClick={OnMove} right="true" /> */}
    </Container>
  );
};
export default CategoryCarousel;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CategoryCarousel extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500,
//     };
//     return (
//       <div>
//         <h2>Center Mode</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
