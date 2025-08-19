import "quill/dist/quill.snow.css";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppLayout from "./layouts/AppLayout";
import { AddBlog } from "./pages/AddBlog";
import AddProject from "./pages/AddProject";
import BlogList from "./pages/BlogList";
import LoginPage from "./pages/LoginPage";
import MessageList from "./pages/MessageList";
import ProjectList from "./pages/ProjectList";
import ViewBlog from "./pages/ViewBlog";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token && location.pathname !== "/login") {
      // redirect only if not already on login page
      navigate("/login", { replace: true });
    } else if (token && location.pathname === "/") {
      // default route only if logged in and on "/"
      navigate("/add-project", { replace: true });
    }
  }, [navigate, location.pathname, token]);

  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {isLoginPage ? (
        // Show only login page without layout
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        // Authenticated layout
        <AppLayout>
          <Navbar />
          <div className="flex gap-3 min-h-screen">
            <div className="w-48 hidden lg:block border-r">
              <Sidebar />
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              <Routes>
                <Route path="/add-project" element={<AddProject />} />
                <Route path="/project-list" element={<ProjectList />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="/blog-list" element={<BlogList />} />
                <Route path="/blog/:id" element={<ViewBlog />} />
                <Route path="/message-list" element={<MessageList />} />
              </Routes>
            </div>
          </div>
        </AppLayout>
      )}
    </>
  );
};

export default App;
