import { skillsData } from "@/assets/assets";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as VscIcons from "react-icons/vsc";

const Skills = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20">
      <h2 className="text-4xl font-bold  mb-2 text-center">My Skills</h2>
      <span className="block h-1 w-24 bg-blue-600  dark:bg-white rounded-full mx-auto mb-8"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {skillsData.map(({ id, name, level, icon, class: className }) => {
          const IconComponent =
            FaIcons[icon] || SiIcons[icon] || VscIcons[icon] || null;

          return (
            <div key={id} className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  {IconComponent && (
                    <IconComponent className={`text-3xl ${className}`} />
                  )}
                  <span className="text-lg font-medium">{name}</span>
                </div>
                <span className="font-medium">{level}%</span>
              </div>

              <div className="bg-gray-200 dark:bg-white shadow-2xl rounded-full h-3 w-full">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
