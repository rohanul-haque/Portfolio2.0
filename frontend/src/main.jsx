import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextsProvider } from "./contexts/AppContexts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextsProvider>
      <App />
    </AppContextsProvider>
  </BrowserRouter>
);
