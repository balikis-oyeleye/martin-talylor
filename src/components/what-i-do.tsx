const WhatIDo = () => {
  const services = [
    {
      title: "Digital Design",
      description:
        "Creation of beautiful interfaces and intuitive experiences.",
    },
    {
      title: "No-code Expert",
      description: "The most efficient platform to implement web solutions.",
    },
    {
      title: "Product Strategy",
      description: "Defining product strategy and shirt & long term goals",
    },
    {
      title: "Art Direction",
      description: "A strong foundation is essential for any project.",
    },
  ];

  return (
    <section className="container mx-auto p-4 sm:p-0">
      <h2 className="text-3xl font-bold text-secondary py-6">What I Do</h2>
      <div className="bg-secondary w-full h-0.5 md:h-1 rounded-lg mb-9" />
      <div className="flex gap-12 lg:gap-36 flex-col md:flex-row">
        <p className="text-secondary max-w-[300px] md:text-xl text-lg">
          I am dedicated to expanding my knowledge and expertise in my field.
          Throughout my career, I've acquired various skills, which I continue
          to perfect.
        </p>
        <ul className="grid grid-cols-2 md:gap-8 gap-4">
          {services.map((service, index) => (
            <li key={service.title} className="space-y-4">
              <span className="text-2xl md:text-3xl font-bold text-[#2b2622]">
                0{index + 1}
              </span>
              <h3 className="text-lg md:text-2xl text-secondary">
                {service.title}
              </h3>
              <p className="md:text-lg text-base font-medium text-secondary">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatIDo;
