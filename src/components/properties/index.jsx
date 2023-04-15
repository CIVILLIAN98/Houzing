import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Container, Header } from "./styled";
import useRequest from "../../hooks/useRequest";

const Properties = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { search } = useLocation();
  
  const request = useRequest();
  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
