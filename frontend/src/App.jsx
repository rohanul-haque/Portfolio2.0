import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppLayout } from "./layout/AppLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
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
      <FooterPage/> 
    </AppLayout>
  );
};

export default App;
