import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppLayout from "./layouts/AppLayout";
import AddProject from "./pages/AddProject";
import AddTeamMember from "./pages/AddTeamMember";
import LoginPage from "./pages/LoginPage";
import ProjectList from "./pages/ProjectList";
import TeamMemberList from "./pages/TeamMemberList";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    if (location.pathname === "/") {
      navigate("/add-project", { replace: true });
    }
  }, [navigate, location.pathname, token]);

  const showLayout = location.pathname !== "/login";

  return (
    <AppLayout>
      {showLayout && <Navbar />}
      <div className="flex gap-3">
        {showLayout && (
          <div className="w-48 border-r h-screen hidden lg:block">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 pt-3">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/project-list" element={<ProjectList />} />
            <Route path="/add-team-member" element={<AddTeamMember />} />
            <Route path="/team-member-list" element={<TeamMemberList />} />
          </Routes>
        </div>
      </div>
    </AppLayout>
  );
};

export default App;
