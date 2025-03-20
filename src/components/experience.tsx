const Experience = () => {
  const experience = [
    {
      company: "MANO",
      title: "Design Consultant",
      date: "2022 - Now",
    },
    {
      company: "Spotify",
      title: "Senior Designer",
      date: "2021-2022",
    },
    {
      company: "Martin taylor",
      title: "Freelancer Designer",
      date: "2019 - 2021",
    },
    {
      company: "Shrink",
      title: "UI/UX Designer",
      date: "2018 - 2019",
    },
    {
      company: "IBM",
      title: "Design Intern",
      date: "2016 - 2017",
    },
  ];

  return (
    <section className="container mx-auto p-4 sm:p-0">
      <h2 className="text-3xl font-bold text-secondary py-6">Experience</h2>
      <div className="bg-secondary w-full h-0.5 md:h-1 rounded-lg mb-9" />
      <div className="flex gap-12 flex-col md:flex-row">
        <p className="text-secondary max-w-[300px]">
          I've worked with companies and clients, both in agency settings and as
          a freelancer. I enjoy collaborating with clients who appreciate the
          importance of good design.
        </p>
        <ul className="flex-1">
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-row border-gray-200 py-4 not-last:border-b items-center"
            >
              <h3 className="text-secondary text-sm md:text-lg font-bold basis-1/4 md:whitespace-nowrap">
                {exp.company}
              </h3>
              <p className="text-secondary text-sm md:text-lg basis-2/4">
                {exp.title}
              </p>
              <p className="text-secondary text-sm md:text-lg  basis-1/4">
                {exp.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
