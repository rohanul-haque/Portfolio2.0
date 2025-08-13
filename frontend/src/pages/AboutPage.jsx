import { aboutBanner } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/About.css";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 mt-20 mb-60">
      <div className="flex flex-col lg:flex-row  items-center lg:gap-16">
        <div className="lg:mt-0 flex justify-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {aboutBanner.map((banner) => {
              return (
                <SwiperSlide className="border-6 border-white shadow dark:border-white">
                  <img
                    className="w-full h-full object-cover shadow"
                    src={banner.image}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-4xl font-bold  mb-2">About Me</h2>
          <span className="block h-1 w-20 bg-blue-600 rounded-full mb-8 m-auto md:m-0 "></span>
          <p className="mb-4 mt-6">
            👋 Hello! I'm a passionate web developer 💻 with experience in
            building responsive 📱 and user-friendly 🌟 websites. I specialize
            in React JS ⚛️, JavaScript 📜, Node.js 🟢, Express.js 🚀, MongoDB 🍃
            and modern web technologies 🛠️. I love turning ideas 💡 into reality
            ✨ through code 🖋️.
          </p>
          <p className="mb-5">
            When I'm not coding 💻, you can find me exploring new technologies
            🔍, contributing to open-source projects 🤝, or enjoying the
            outdoors 🌿☀️.
          </p>
          <Button onClick={() => navigate("/contact")} variant={"destructive"}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
