import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import { AppLayout } from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import ViewBlogPage from "./pages/ViewBlogPage";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ViewBlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
