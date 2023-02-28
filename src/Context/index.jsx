import React, { createContext } from "react";
import PropertiesProvider from "./properties";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={""}>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Context.Provider>
  );
};
export default ContextProvider;
