import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AppContextsProvider } from "./contexts/AppContexts";
import { ThemeContextProvider } from "./contexts/ThemeContexts";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextsProvider>
      <ThemeContextProvider>
        <App />
        <Toaster />
      </ThemeContextProvider>
    </AppContextsProvider>
  </BrowserRouter>
);
