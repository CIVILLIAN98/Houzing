import React, { useEffect, useState } from "react";

const Products = () => {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setState(res));
  }, []);
  // console.log(state);
  return (
    <div>
      <h1>products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
        {state?.map((vl) => {
          return (
            <div>
              <p>{vl}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
