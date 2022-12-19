import React, { createContext, useState } from "react";

export const Context = createContext(null);

type typeState = {
  toogleDark?: boolean;
  setToogleDark?: (e: any) => void;
}

function Provider({ children }) {
  const [toogleDark, setToogleDark] = useState(true);

  const globalContext: typeState = {
    toogleDark,
    setToogleDark
  }; 

  return (
    <Context.Provider value={globalContext}>
      {children}
    </Context.Provider>
  )
};

export default Provider;
