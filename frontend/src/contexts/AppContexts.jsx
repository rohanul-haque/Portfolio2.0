import { createContext } from "react";

export const AppContexts = createContext();

export const AppContextsProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    backendUrl,
  };

  return <AppContexts.Provider value={value}>{children}</AppContexts.Provider>;
};
