import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Container, Header } from "./styled";

const Properties = () => {
  const navigate = useNavigate();
  // const { REACT_APP_BASE_URL: Http } = process.env;
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    // eslint-disable-next-line
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/list${search}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <Header>
        <Header.Title>Properties</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
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
    </React.Fragment>
  );
};
export default Properties;
