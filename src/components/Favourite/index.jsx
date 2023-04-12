import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Container, Header } from "./style";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../Context/properties";

const Favourite = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { REACT_APP_BASE_URL } = process.env;
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = await fetch(
        `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await res.json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <Header>
        <Header.Title>Favorite Houses</Header.Title>
        <Header.Subtitle>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Header.Subtitle>
      </Header>
      <Container>
        {data?.data?.length ? (
          data?.data.map((val) => {
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
