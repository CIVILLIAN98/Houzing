import React from "react";
const Properties = React.lazy(() =>
  import("../../components/Properties/index")
);
export const Propertiespage = () => (
  <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
    <Properties />
  </React.Suspense>
);
