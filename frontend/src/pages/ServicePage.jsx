const ServicePage = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Web Development Services",
      services: [
        {
          id: 1,
          title: "Frontend Development",
          description:
            "💻✨🎨 Creating stunning and interactive user interfaces! 🖱️📱\nEngaging designs that users love 😍👍",
          icon: "💻",
        },
        {
          id: 2,
          title: "Backend Development",
          description:
            "🖥️⚡🔧 Building fast, secure, and scalable server apps! 🛡️📦\nSmooth operations with reliable performance 🚀🔥",
          icon: "🖥️",
        },
        {
          id: 3,
          title: "Full-Stack Development",
          description:
            "🌐🚀💡 Delivering complete end-to-end web solutions! 🔗💻\nSeamless frontend & backend experience 🌟✨🎯",
          icon: "🌐",
        },
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-20">
      <h2 className="text-4xl font-bold mb-2 text-center">My Services</h2>
      <span className="block h-1 w-24 bg-blue-600 dark:bg-white rounded-full mx-auto mb-8"></span>

      {serviceCategories.map((category) => (
        <div key={category.id} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.services.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-lg text-center border border-gray-300 dark:border-gray-700 backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicePage;
