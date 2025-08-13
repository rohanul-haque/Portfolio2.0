import { teamMembers } from "@/assets/assets";
import { Facebook, Github, Linkedin } from "lucide-react";

export const MyTeam = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20 pb-10">
      {/* Section Title */}
      <h2 className="text-4xl font-bold  mb-2 text-center">My Teams</h2>
      <span className="block h-1 w-24 bg-blue-600  dark:bg-white rounded-full mx-auto mb-8"></span>

      {/* Team Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl text-center border border-gray-400/50 dark:border-gray-500/50 backdrop-blur-sm hover:-translate-y-3 transition-all duration-300"
          >
            {/* Avatar */}
            <img
              className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
              src={member.img}
              alt={member.name}
            />
            {/* Name + Role */}
            <h1 className="text-lg font-semibold uppercase">{member.name}.</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {member.role}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center mt-4">
              <a
                href={member.socials.facebook}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700  hover:bg-blue-500 hover:dark:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700  hover:bg-blue-500 hover:dark:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700  hover:bg-blue-500 hover:dark:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
