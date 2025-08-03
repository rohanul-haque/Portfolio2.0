import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/contexts/ThemeContexts";
import { useContext } from "react";

const HomePage = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Button onClick={() => setDarkMode(!darkMode)}>Mode</Button>
    </div>
  );
};

export default HomePage;
