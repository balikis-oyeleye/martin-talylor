import { motion } from "motion/react";
import { BsAsterisk } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="min-h-screen  text-secondary py-24 container mx-auto px-2 flex flex-col justify-center items-center">
      <div
        className="flex flex-col justify-center items-center
       gap-y-4 lg:gap-y-8 h-full"
      >
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[110px] font-light relative "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Hello! I'm Martin
            <BsAsterisk
              color="#ffffcf"
              className="absolute -top-0.5 -right-6 md:-right-10 size-4 sm:size-6 lg:size-10"
            />
          </motion.h1>
        </div>

        <div className="flex items-center sm:items-end lg:items-center flex-col md:flex-row-reverse gap-3 md:gap-8 ">
          <div className="overflow-hidden pb-2">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[110px] font-bold"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.25 }}
            >
              A designer
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="max-w-[400px] md:max-w-[400px] text-sm sm:text-lg md:text-2xl mx-auto text-center sm:text-right  md:text-left"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.25 }}
            >
              With 8 years of experience, I ask the necessary (and sometimes the
              difficult questions) to create brands and products that focus on
              and prioritize people
            </motion.p>
          </div>
        </div>
        <div className="overflow-hidden pb-2">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[110px] font-light"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            lives by design
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
