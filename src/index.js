import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./Context";
import "./index.css";
import Root from "./root/root";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Root />
    </ContextProvider>
  </React.StrictMode>
);
