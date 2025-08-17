import { navlinks } from "@/assets/assets";
import { AppContext } from "@/contexts/AppContext";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const { adminData, fetchAdminData } = useContext(AppContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logout Successfull");
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const navItems = [
    { to: "/add-project", label: "Add Project" },
    { to: "/project-list", label: "Project List" },
    { to: "/add-team-member", label: "Add Team Member" },
    { to: "/team-member-list", label: "Team Member List" },
  ];

  return (
    <header className="pt-5 pb-3 border-b border-gray-200">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <NavLink className="flex items-center gap-2" to={"/add-project"}>
          <h1 className="text-2xl font-bold text-blue-500">Dashboard</h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={adminData?.image}
              alt="profile"
            />
            <span className="hidden md:block">{adminData?.name}</span>
          </div>
          <Button
            onClick={logoutHandler}
            className={"cursor-pointer"}
            variant={"ghost"}
          >
            <LogOut />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {<Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu (Left to Right) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg border-r z-50 flex flex-col"
          >
            {/* Header with Logo + Close */}
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-xl font-bold text-blue-500">Dashboard</h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(false)}
              >
                <X />
              </Button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col gap-1 p-4">
              <div className="flex items-center gap-2 border-b pb-3 mb-2">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={adminData?.image}
                  alt="profile"
                />
                <span>{adminData?.name}</span>
              </div>

              {navlinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "hover:bg-blue-50"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            {/* Bottom Logout */}
            <div className="border-t p-4">
              <Button
                onClick={logoutHandler}
                className="w-full flex gap-2 items-center"
                variant="ghost"
              >
                <LogOut /> Logout
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
