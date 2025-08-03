import { createContext } from "react";

export const AppContexts = createContext();

export const AppContextsProvider = ({ children }) => {
  const value = {};

  return <AppContexts.Provider value={value}>{children}</AppContexts.Provider>;
};
