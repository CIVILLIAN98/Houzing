import React from "react";
const Properties = React.lazy(() => import("../../components/properties"));
export const Propertiespage = () => (
  <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
    <Properties />
  </React.Suspense>
);
