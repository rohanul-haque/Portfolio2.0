import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextsProvider } from "./contexts/AppContexts";

createRoot(document.getElementById("root")).render(
  <AppContextsProvider>
    <App />
  </AppContextsProvider>
);
