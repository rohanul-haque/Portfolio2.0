import { blogPosts } from "@/assets/assets";
import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogPosts.find((b) => b.id === Number(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return (
      <section className="px-4 sm:px-8 lg:px-16 mt-16 min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Blog post not found.</p>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20">
      {/* Back Button */}
      <div className="mb-5 ">
        <Link
          to="/blog"
          className="dark:text-white md:text-lg font-medium hover:underline flex items-center gap-2"
        >
          <MoveLeft /> Back to Blogs
        </Link>
      </div>
      {/* Blog Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-96 object-cover"
        />
      </div>

      {/* Blog Content */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-5">{blog.title}</h1>
      <p className="leading-loose pb-10">{blog.description}</p>
    </section>
  );
};

export default ViewBlogPage;
