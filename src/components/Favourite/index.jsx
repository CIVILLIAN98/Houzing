import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Container, Header } from "./style";

const Favourite = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/getAll/favouriteList`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line
  }, [search]);
  console.log(data, "data");
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <Header>
        <Header.Title>Favourite</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
      <Container>
        {data?.length ? (
          data.map((val) => {
            return (
              <HouseCard
                onClick={() => onSelect(val?.id)}
                data={val}
                key={val.id}
              />
            );
          })
        ) : (
          <h1>No data</h1>
        )}
      </Container>
    </React.Fragment>
  );
};
export default Favourite;
