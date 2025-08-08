import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { assets } from "../assets/assets";
import { Button } from "./ui/button";

const Hero = () => {
  const naviagte = useNavigate();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 mt-16">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <span className="text-xl mb-2 font-bold block">
            👋 Hi! I'm Rohanul Haque
          </span>

          <TypeAnimation
            key="type-animation"
            sequence={[
              "I am a Full Stack Developer",
              1000,
              "I am a Blogger...",
              1000,
              "I am a Youtuber...",
              1000,
              "I am a Freelancer...",
              1000,
            ]}
            speed={50}
            className="font-bold text-2xl sm:text-3xl lg:text-4xl text-purple-600"
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
          <p className="mt-4 md:text-lg">
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </p>
          <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start">
            <Button
              onClick={() => naviagte("/contact")}
              variant={"destructive"}
            >
              Get In Touch
            </Button>
            <Button variant={"default"}>View Resume</Button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-20 lg:mt-0 md:w-[35%] flex justify-center">
          <img
            src={assets.hero}
            alt="Rohanul Haque Rohan"
            className="rounded-2xl shadow-lg w-full max-w-md transition-transform duration-400 ease-in-out transform rotate-0 md:rotate-6 hover:rotate-0 hover:border-4 hover:p-[1px] hover:border-purple-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
