import { CircleUser } from "lucide-react";
import { FaCertificate, FaGraduationCap, FaSchool } from "react-icons/fa";

const EducationAndQualification = () => {
  const education = [
    {
      id: 1,
      degree: "Diploma in Computer Science & Technology",
      institution: "Institute of Example",
      year: "Running",
      description:
        "Currently pursuing a diploma in Computer Science & Technology with a focus on software development and data structures.",
      icon: (
        <FaGraduationCap className="text-blue-500 dark:text-white text-2xl" />
      ),
    },
    {
      id: 2,
      degree: "High School",
      institution: "Example High School",
      year: "2016 - 2021",
      description:
        "Completed high school with a focus on mathematics, English and science.",
      icon: <FaSchool className="text-blue-500 dark:text-white text-2xl" />,
    },
    {
      id: 3,
      degree: "Certification in Full-Stack Development",
      institution: "Ostad Platform",
      year: "2024 - 2025",
      description:
        "Enrolled in a comprehensive course on full-stack development, covering React, Node.js, and MongoDB.",
      icon: (
        <FaCertificate className="text-blue-500 dark:text-white text-2xl" />
      ),
    },
    {
      id: 4,
      degree: "TPI CPC Programming Club - Executive Team Member",
      institution: "Thakurgaon Polytechnic Institute",
      year: "2023 - 2025",
      description:
        "I was an executive team member at TPI CPC Programming Club, where I learned effective teamwork, leadership, and problem-solving in coding projects. I gained hands-on experience in managing tasks, collaborating with peers, and tackling programming challenges.",
      icon: <CircleUser className="text-blue-500 dark:text-white text-2xl" />,
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20">
      <h2 className="text-4xl font-bold mb-2 text-center">
        Education & Experience
      </h2>
      <span className="block h-1 w-24 bg-blue-600 dark:bg-white rounded-full mx-auto mb-8"></span>

      <div className="space-y-4 relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-0 h-full w-0.5 bg-blue-500"></div>

        {education.map((edu) => (
          <div key={edu.id} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-3 top-0 h-4 w-4 bg-blue-500 rounded-full"></div>

            {/* Education Card */}
            <div className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-4">
                <span>{edu.icon}</span>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="font-medium mb-2">
                {edu.institution} | {edu.year}
              </p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationAndQualification;
