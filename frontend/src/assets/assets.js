import logo from "./Logoi.jpg";
import hero from "./hero.jpg";
import about_1 from "./about.jpg";
import about_2 from "./about_2.png";

export const assets = {
  logo,
  hero,
  about_1,
  about_2,
};

export const navlinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Service", path: "/service" },
  { id: 4, title: "Blog", path: "/blog" },
  { id: 5, title: "Contact", path: "/contact" },
];

export const counterData = [
  { id: 1, counterNumber: 1, title: "Years of Experience" },
  { id: 2, counterNumber: 50, title: "Projects Completed" },
  { id: 3, counterNumber: 10, title: "Satisfied Clients" },
];
export const aboutBanner = [
  { id: 1, image: about_1 },
  { id: 2, image: about_2 },
  { id: 3, image: hero },
];
