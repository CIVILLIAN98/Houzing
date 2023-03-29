import React, { useEffect, useState } from "react"; // import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container } from "./style";

const HouseItem = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  console.log(params, "params");
  useEffect(() => {
    // eslint-disable-next-line
    fetch(`http://158.51.99.245:8081/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);

        // window.scrollTo(0, 0);
      });
  }, [params?.id]);
  console.log(data, "data");
  return (
    <Container>
      <p> {data?.id}</p>
      <h1>House is loading...</h1>
    </Container>
  );
};
export default HouseItem;
