import { Button } from "@/components/ui/button";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { backendUrl } = useContext(AppContext);

  const fetchProjectData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/project/list`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (data.success) {
        setProjectList(data?.projects || []);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch projects"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    try {
      const { data } = await axios.delete(`${backendUrl}/project/delete`, {
        headers: {
          token: localStorage.getItem("token"),
        },
        data: { projectId },
      });

      if (data.success) {
        toast.success("Project deleted successfully");
        fetchProjectData();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete project"
      );
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <section className="w-full">
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Image
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                Description
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                Tags
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                Live
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                Source
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {isLoading ? (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
                  </div>
                </td>
              </tr>
            ) : projectList.length > 0 ? (
              projectList.map((list) => (
                <tr
                  key={list._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex-shrink-0 h-12 w-12 border rounded-md border-gray-300">
                      <img
                        className="h-10 w-10 rounded-md object-cover"
                        src={list.image}
                        alt={list.title}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 max-w-[150px] truncate">
                      {list.title}
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 max-w-[200px]">
                      {list.description}
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1 max-w-[150px]">
                      {(Array.isArray(list.tags)
                        ? list.tags
                        : list.tags?.split?.(",") || []
                      )
                        .slice(0, 3)
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 truncate"
                            title={
                              typeof tag === "string" ? tag.trim() : String(tag)
                            }
                          >
                            {typeof tag === "string" ? tag.trim() : String(tag)}
                          </span>
                        ))}
                      {(Array.isArray(list.tags)
                        ? list.tags
                        : list.tags?.split?.(",") || []
                      ).length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          +
                          {(Array.isArray(list.tags)
                            ? list.tags
                            : list.tags?.split?.(",") || []
                          ).length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                    {list.liveLink ? (
                      <a
                        href={
                          list.liveLink.startsWith("http")
                            ? list.liveLink
                            : `https://${list.liveLink}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline inline-block max-w-[80px] truncate text-center"
                        title={list.liveLink}
                      >
                        Live
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400 inline-block max-w-[80px] truncate text-center">
                        -
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                    {list.sourceCode ? (
                      <a
                        href={list.sourceCode}
                        target="_blank"
                        className="text-sm text-blue-600 hover:underline flex items-center justify-center"
                      >
                        <span className="hidden md:inline">Source</span>
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(list._id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        aria-label="Delete project"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectList;
