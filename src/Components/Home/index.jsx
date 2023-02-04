import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const [state, setState] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    /* providing token in bearer */
    fetch("https://dummyjson.com/products?limit=10", {
      method: "GET" /* or POST/PUT/PATCH/DELETE */,
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setState(res.products));
  }, []);
  console.log(state);
  // const cookies = new cookies();
  // cookies.set(key1, value1, { secure: true, sameSite: "none" });
  // cookies.set(key2, value2, { secure: true, sameSite: "none" });
  return (
    <div>
      <h1>Home</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,200px)",
          gridGap: "20px",
        }}
      >
        {state?.map((vl) => {
          return (
            <div
              onClick={() => navigate(`${location.pathname}/:${vl.id}`)}
              key={vl.id}
              style={{
                border: "1px solid black",
                padding: "0",
                background: "black",
              }}
            >
              <img
                width={200}
                height={200}
                src={vl?.thumbnail}
                alt={vl?.description}
              />
              <p
                style={{
                  fontSize: "20px",
                  width: "100%",
                  height: "53px",
                  color: "white",
                }}
              >
                {vl?.title}
              </p>
              <p style={{ width: "100%", background: "aqua", margin: "0" }}>
                {" "}
                1X-
                {vl.price}$
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
