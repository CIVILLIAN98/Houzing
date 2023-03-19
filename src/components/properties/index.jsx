import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HouseCard from "../HouseCards";
import { Conatiner } from "./styled";

const Properties = () => {
  const { REACT_APP_BASE_URL: Http } = process.env;
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    fetch(`${Http}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  return (
    <Conatiner>
      {data.map((val) => {
        return <HouseCard data={val} key={val.id} />;
      })}
    </Conatiner>
  );
};
export default Properties;
