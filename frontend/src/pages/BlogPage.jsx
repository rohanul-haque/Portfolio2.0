import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { AppContexts } from "@/contexts/AppContexts";
import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { backendUrl } = useContext(AppContexts);

  const totalPages = blogPosts.length
    ? Math.ceil(blogPosts.length / postsPerPage)
    : 1;

  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const fetchBlogPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${backendUrl}/blog/list`);
      if (data.success) setBlogPosts(data.blogList);
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const truncateText = (html, length = 100) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-16">
      <h1 className="text-4xl font-bold mb-2 text-center">My Blogs</h1>
      <span className="block h-1 w-24 bg-blue-600 dark:bg-white rounded-full mx-auto mb-8"></span>

      <motion.div
        key={currentPage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {loading
          ? Array.from({ length: postsPerPage }).map((_, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-gray-400/50 dark:border-gray-700 backdrop-blur-sm space-y-4"
              >
                <Skeleton className="w-full h-48 rounded-md bg-gray-400 dark:bg-gray-500" />
                <Skeleton className="h-6 w-3/4 rounded bg-gray-400 dark:bg-gray-500" />
                <Skeleton className="h-4 w-full rounded bg-gray-400 dark:bg-gray-500" />
                <Skeleton className="h-10 w-1/2 rounded bg-gray-400 dark:bg-gray-500" />
              </div>
            ))
          : currentPosts.map(({ _id, title, description, image }) => (
              <div
                key={_id}
                className="p-6 rounded-lg border border-gray-400/50 dark:border-gray-700 backdrop-blur-sm"
              >
                <img
                  src={image || "/placeholder-project.png"}
                  alt={title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-5 space-y-3">
                  <h3 className="text-2xl font-bold mb-4">
                    {title.slice(0, 25)}...
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {truncateText(description, 100).slice(0, 100)}.....
                  </p>
                  <Button
                    onClick={() => navigate(`/blog/${_id}`)}
                    className="bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
      </motion.div>

      {/* Pagination */}
      {loading ? (
        <div className="mt-10 flex justify-center space-x-2">
          {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => (
            <Skeleton key={i} className="w-8 h-8 rounded" />
          ))}
        </div>
      ) : blogPosts.length > 0 ? (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(i + 1);
                    }}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : null}
    </section>
  );
};

export default BlogPage;
