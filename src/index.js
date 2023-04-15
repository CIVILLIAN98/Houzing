
import React from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./Context";
import "./index.css";
import Root from "./root/root";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Root />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
