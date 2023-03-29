import React from "react";
const Contacts = React.lazy(() => import("../../components/contacts"));
export const Contactspage = () => {
  return (
    <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <Contacts />;
    </React.Suspense>
  );
};
