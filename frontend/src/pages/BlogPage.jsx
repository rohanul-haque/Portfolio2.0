import { blogPosts } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const navigate = useNavigate();

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
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
        {currentPosts.map(({ id, title, description, image, link }) => (
          <div
            key={id}
            className="p-6 rounded-lg border border-gray-400/50 dark:border-gray-700 backdrop-blur-sm"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-5">
              <h3 className="text-2xl font-bold mb-4">
                {title.slice(0, 25)}.....
              </h3>
              <p className="mb-4">{description.slice(0, 100)}.....</p>
              <Button
                onClick={() => navigate(`/blog/${id}`)}
                className={
                  "bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                }
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
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
    </section>
  );
};

export default BlogPage;
