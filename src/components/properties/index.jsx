import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Container } from "./styled";

const Properties = () => {
  const navigate = useNavigate();
  // const { REACT_APP_BASE_URL: Http } = process.env;
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    // eslint-disable-next-line
    fetch(`http://158.51.99.245:8081/api/v1/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      {data.map((val) => {
        return (
          <HouseCard
            onClick={() => onSelect(val?.id)}
            data={val}
            key={val.id}
          />
        );
      })}
    </Container>
  );
};
export default Properties;
