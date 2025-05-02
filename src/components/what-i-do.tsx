import { motion } from "motion/react";
import {
  childVariants,
  containerVariants,
  itemVariants,
  lineVariants,
  listVariants,
  textVariants,
} from "../lib/animations";

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
    <motion.section
      className="container mx-auto p-4 sm:p-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div>
        <motion.h2
          className="text-3xl font-bold text-secondary py-6"
          variants={childVariants}
        >
          What I Do
        </motion.h2>
      </div>
      <motion.div
        className="bg-secondary h-0.5 rounded-lg mb-9"
        variants={lineVariants}
      />
      <div className="flex gap-12 lg:gap-36 flex-col md:flex-row">
        <motion.p
          className="text-secondary max-w-[300px] md:text-xl text-lg"
          variants={textVariants}
        >
          I am dedicated to expanding my knowledge and expertise in my field.
          Throughout my career, I've acquired various skills, which I continue
          to perfect.
        </motion.p>
        <motion.ul
          className="grid grid-cols-2 md:gap-8 gap-4 overflow-hidden"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              className="space-y-4"
              variants={itemVariants}
            >
              <span className="text-2xl md:text-3xl font-bold text-white/30">
                0{index + 1}
              </span>
              <h3 className="text-lg md:text-2xl text-secondary">
                {service.title}
              </h3>
              <p className="md:text-lg text-base font-medium text-secondary">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default WhatIDo;
