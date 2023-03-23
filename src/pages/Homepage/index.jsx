import React from "react";
// import Home from "../../components/home";
const Home = React.lazy(() => import("../../components/home/index"));
export const Homepage = () => (
  <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
    <Home />
  </React.Suspense>
);
