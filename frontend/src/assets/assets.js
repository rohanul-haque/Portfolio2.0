import logo from "./Logoi.jpg";
import about_1 from "./about.jpg";
import about_2 from "./about_2.png";
import card_1 from "./card_1.png";
import hero from "./hero.jpg";

export const assets = {
  logo,
  hero,
  about_1,
  about_2,
  card_1,
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

export const skillsData = [
  { id: 1, name: "HTML", level: 95, icon: "FaHtml5", class: "text-orange-500" },
  { id: 2, name: "CSS", level: 90, icon: "FaCss3Alt", class: "text-blue-500" },
  {
    id: 3,
    name: "Tailwind CSS",
    level: 90,
    icon: "SiTailwindcss",
    class: "text-teal-500",
  },
  {
    id: 4,
    name: "JavaScript",
    level: 85,
    icon: "FaJs",
    class: "text-yellow-500",
  },
  { id: 5, name: "React", level: 80, icon: "FaReact", class: "text-blue-400" },
  {
    id: 6,
    name: "Next.js",
    level: 75,
    icon: "SiNextdotjs",
    class: "text-black dark:text-white",
  },
  {
    id: 7,
    name: "Node.js",
    level: 75,
    icon: "FaNodeJs",
    class: "text-green-500",
  },
  {
    id: 8,
    name: "Express.js",
    level: 70,
    icon: "SiExpress",
    class: "text-gray-800 dark:text-white",
  },
  {
    id: 9,
    name: "MongoDB",
    level: 65,
    icon: "SiMongodb",
    class: "text-green-600",
  },
  {
    id: 10,
    name: "Git",
    level: 85,
    icon: "FaGitAlt",
    class: "text-orange-600",
  },
  {
    id: 11,
    name: "GitHub",
    level: 85,
    icon: "FaGithub",
    class: "text-gray-900 dark:text-white",
  },
  {
    id: 12,
    name: "Postman",
    level: 80,
    icon: "SiPostman",
    class: "text-orange-500",
  },
  {
    id: 13,
    name: "VS Code",
    level: 95,
    icon: "VscVscode",
    class: "text-blue-500",
  },
  {
    id: 14,
    name: "Vercel",
    level: 85,
    icon: "SiVercel",
    class: "text-black dark:text-white",
  },
  {
    id: 15,
    name: "Netlify",
    level: 80,
    icon: "SiNetlify",
    class: "text-green-500",
  },
  { id: 16, name: "NPM", level: 85, icon: "FaNpm", class: "text-red-600" },
];
