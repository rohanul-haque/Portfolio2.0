import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppLayout from "./layouts/AppLayout";
import AddProject from "./pages/AddProject";
import AddTeamMember from "./pages/AddTeamMember";
import LoginPage from "./pages/LoginPage";
import ProjectList from "./pages/ProjectList";
import TeamMemberList from "./pages/TeamMemberList";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    if (location.pathname === "/") {
      navigate("/add-project", { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <AppLayout>
      <Navbar />
      <Routes>
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/add-team-member" element={<AddTeamMember />} />
        <Route path="/team-member-list" element={<TeamMemberList />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
