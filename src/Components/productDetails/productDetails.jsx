import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();

  const param = useParams();
  const pid = param.Pid.replace(":", "");
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${pid}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  console.log(product, "STATE");
  return (
    <div style={{ width: "100%" }}>
      <h1>Product Details</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          width={400}
          height={400}
          src={product?.thumbnail}
          alt={product?.description}
        />
        <div>
          <p>{product?.title}</p>
          <p> 1x{product?.price}$</p>
          <p>Description: {product?.description}</p>
          <p>Rating: {product?.rating}</p>
          <p>Stock: {product?.stock}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
