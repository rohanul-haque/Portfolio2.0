import Counter from "@/components/Counter";
import EducationAndQualification from "@/components/EducationAndQualification";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import { MyTeam } from "@/components/MyTeam";
import Skills from "@/components/Skills";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import ServicePage from "./ServicePage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <AboutPage />
      <Skills />
      <EducationAndQualification />
      <ServicePage />
      <MyTeam />
      <MyProject />
      <BlogPage />
      <div className="block mb-20"></div>
      <ContactPage />
    </>
  );
};

export default HomePage;
