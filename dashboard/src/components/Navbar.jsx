import { assets } from "@/assets/assets";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="pt-5 pb-3 border-b border-gray-200">
      <nav className="flex items-center justify-between">
        <Link className="flex items-center gap-2" to={"/"}>
          <h1 className="text-2xl font-bold text-blue-500">Dashboard</h1>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={assets.card_1}
              alt="profile"
            />
            <span>Rohan</span>
          </div>
          <Button className={"cursor-pointer"} variant={"ghost"}>
            <LogOut />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
