import React, { useState, createContext } from "react";
import { initialState } from "./initialState";
export const StateContext = createContext();

export const StateProvider = (props) => {
  const [data, setData] = useState(initialState);
  return (
    <StateContext.Provider value={[data, setData]}>
      {props.children}
    </StateContext.Provider>
  );
};
