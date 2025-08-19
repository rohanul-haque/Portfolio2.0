import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

const FooterPage = () => {
  return (
    <footer className="bg-gray-900 px-4 sm:px-8 lg:px-16 mt-20 pt-16 pb-10 rounded-tl-xl rounded-tr-xl text-white dark:border-t dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
                to={"/services"}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-blue-500"
                      : "hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/md.rohanul.haque.rohan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-md hover:bg-purple-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rohanul-haque"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-md hover:bg-purple-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/rohanul-haque"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-md hover:bg-purple-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/md.rohanul.haque.rohan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-md hover:bg-purple-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>
              <span>dev.rohan2024@gmail.com</span>
            </li>
            <li>
              <span>+8801707474429 or +8801896486337</span>
            </li>
            <li>
              <p>Saidpur, Rangpur, Bangladesh</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved by
          <b className="ml-1 text-white">❤️‍🔥ROHAN❤️‍🔥</b>
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
