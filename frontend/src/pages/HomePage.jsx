import Counter from "@/components/Counter";
import EducationAndQualification from "@/components/EducationAndQualification";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <AboutPage />
      <Skills />
      <EducationAndQualification />
    </>
  );
};

export default HomePage;
