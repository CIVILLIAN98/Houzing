import React, { createContext, useReducer } from "react";
import { Reducer } from "./reducer";

export const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, []);
  return (
    <PropertiesContext.Provider value={[state, dispatch]}>
      {children}
    </PropertiesContext.Provider>
  );
};
export default PropertiesProvider;
