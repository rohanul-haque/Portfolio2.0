import { AppContexts } from "@/contexts/AppContexts";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";

// const projectsData = [
//   {
//     id: 1,
//     title: "E-Commerce Website",
//     description:
//       "A fully functional e-commerce website built with React and Node.js.",
//     tags: ["Web Development", "React"],
//     image:
//       "https://media.licdn.com/dms/image/v2/D562DAQE5fEv8QRK2jQ/profile-treasury-image-shrink_800_800/B56ZcnHcbdHoAY-/0/1748707956151?e=1755694800&v=beta&t=hCZiUdkoTnYdZ5mcJkvI5LStLl4684mKcc5impPL8XI",
//     sourceCode: "https://github.com/example/ecommerce",
//     liveLink: "https://ecommerce-example.com",
//   },
//   {
//     id: 2,
//     title: "Mobile Task Manager",
//     description:
//       "A task management app for iOS and Android built with React Native.",
//     tags: ["Mobile Apps", "React Native"],
//     image:
//       "https://cdn.ostad.app/public/upload/2024-03-22T07-39-00.403Z-WhatsApp%20Image%202024-03-21%20at%2019.26.21_7f78c021.jpg",
//     sourceCode: "https://github.com/example/task-manager",
//     liveLink: "https://taskmanager-example.com",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio website showcasing my projects and skills.",
//     tags: ["Web Development", "Design"],
//     image:
//       "https://cdn.ostad.app/public/upload/2024-03-19T09-53-16.105Z-original-da6fc11e43604bf3d4ae9ae5610793db.png",
//     sourceCode: "https://github.com/example/portfolio",
//     liveLink: "https://portfolio-example.com",
//   },
//   {
//     id: 4,
//     title: "UI/UX Design",
//     description: "A collection of UI/UX designs for various applications.",
//     tags: ["Design"],
//     image: "https://myteacher.ng/wp-content/uploads/2024/03/myteacher-uiux.jpg",
//     sourceCode: "https://github.com/example/ui-ux-design",
//     liveLink: "https://uiux-example.com",
//   },
// ];

const filters = [
  "All",
  "Html & Css",
  "Javascript",
  "Full Stack",
  "Frontend",
  "Backend",
];

export default function MyProject() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [projectsData, setProjectData] = useState([]);

  const { backendUrl } = useContext(AppContexts);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  const fetchProjectData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/project/list`);

      if (data.success) {
        setProjectData(data.projects);
      }

      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20 mb-10">
      <h1 className="text-4xl font-bold mb-2 text-center">Project Showcase</h1>
      <span className="block h-1 w-24 bg-blue-600 dark:bg-white rounded-full mx-auto mb-8"></span>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 hover:bg-blue-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map(
            ({ id, title, description, tags, image, sourceCode, liveLink }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-lg border border-gray-400/50 dark:border-gray-700 backdrop-blur-sm"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full aspect-video object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{description.slice(0, 125)}....</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">
                    <a
                      href={sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a
                      href={
                        liveLink?.startsWith("http")
                          ? liveLink
                          : `https://${liveLink}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                  </Button>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
