import Counter from "@/components/Counter";
import EducationAndQualification from "@/components/EducationAndQualification";
import Hero from "@/components/Hero";
import MyServices from "@/components/MyServices";
import { MyTeam } from "@/components/MyTeam";
import Skills from "@/components/Skills";
import AboutPage from "./AboutPage";
import MyProject from "@/components/MyProject";

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
    </>
  );
};

export default HomePage;
