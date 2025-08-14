import Counter from "@/components/Counter";
import EducationAndQualification from "@/components/EducationAndQualification";
import Hero from "@/components/Hero";
import MyProject from "@/components/MyProject";
import MyServices from "@/components/MyServices";
import { MyTeam } from "@/components/MyTeam";
import Skills from "@/components/Skills";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <AboutPage />
      <Skills />
      <EducationAndQualification />
      <MyServices />
      <MyTeam />
      <MyProject />
      <BlogPage />
      <div className="block mb-20"></div>
      <ContactPage />
    </>
  );
};

export default HomePage;
