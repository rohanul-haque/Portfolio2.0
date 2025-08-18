import { AppContexts } from "@/contexts/AppContexts";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";

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
      : projectsData.filter(
          (project) => project.tags?.includes(activeFilter) // ✅ safe check
        );

  const fetchProjectData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/project/list`);
      if (data.success) {
        setProjectData(data.projects);
      }
    } catch (error) {
      console.error("Error fetching project data:", error.message); // ✅ better error handling
    }
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
            ({
              id,
              title,
              description,
              tags = [],
              image,
              sourceCode,
              liveLink,
            }) => (
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
                <h2 className="text-xl font-bold mb-2">
                  {title.slice(0, 50)}....
                </h2>
                <p className="mb-4">{description.slice(0, 120)}.....</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 4 && (
                    <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">
                      +{tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    asChild
                    className="bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <a
                      href={sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                    >
                      Source Code
                    </a>
                  </Button>
                  <Button asChild variant="outline">
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
