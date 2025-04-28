import { motion, Variants } from "motion/react";

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

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const lineVariants: Variants = {
    hidden: { width: "40%" },
    visible: {
      width: "100%",
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="container mx-auto p-4 sm:p-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="overflow-hidden">
        <motion.h2
          className="text-3xl font-bold text-secondary py-6"
          variants={childVariants}
        >
          Experience
        </motion.h2>
      </div>
      <motion.div
        className="bg-secondary h-0.5 rounded-lg mb-9"
        variants={lineVariants}
      />
      <div className="flex gap-12 lg:gap-36 flex-col md:flex-row">
        <motion.p
          className="text-secondary max-w-[300px]"
          variants={textVariants}
        >
          I've worked with companies and clients, both in agency settings and as
          a freelancer. I enjoy collaborating with clients who appreciate the
          importance of good design.
        </motion.p>

        <motion.ul
          className="flex-1"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {experience.map((exp, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex flex-row border-gray-200 py-4 not-last:border-b items-center"
            >
              <h3 className="text-secondary text-sm md:text-lg font-bold basis-1/4 md:whitespace-nowrap">
                {exp.company}
              </h3>
              <p className="text-secondary text-sm md:text-lg basis-2/4">
                {exp.title}
              </p>
              <p className="text-secondary text-sm md:text-lg basis-1/4">
                {exp.date}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Experience;
