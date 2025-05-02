import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "motion/react";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const negativeX = useTransform(x, (latestX) => -latestX);

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };
  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  return (
    <section className="min-h-screen  text-secondary py-24 container mx-auto px-2 flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center
       gap-y-4 lg:gap-y-8 h-full overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          style={{
            x,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[110px] font-light relative "
            variants={childVariants}
          >
            Hello! I'm Martin
            <svg
              className="absolute -top-0.5 -right-6 md:-right-10 size-4 sm:size-6 lg:size-9"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#ffffcf" stroke-width="4">
                <line x1="50" y1="10" x2="50" y2="90" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="20" y1="20" x2="80" y2="80" />
                <line x1="80" y1="20" x2="20" y2="80" />
              </g>
            </svg>
          </motion.h1>
        </motion.div>

        <div className="flex items-center flex-col md:flex-row-reverse gap-3 md:gap-8">
          <div
            className="overflow-hidden pb-2"
            onMouseMove={(e) => {
              imagePos.x.set(e.nativeEvent.offsetX);
              imagePos.y.set(e.nativeEvent.offsetY);
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[110px] font-bold cursor-default"
              variants={childVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              A designer
            </motion.h1>
            {
              <AnimatePresence>
                {isHovered && (
                  <motion.img
                    src="/image/man.jpg"
                    alt="Martin Taylor"
                    className="pointer-events-none fixed z-50 size-36 md:size-48 lg:size-96 object-cover rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      x: imagePos.x,
                      y: imagePos.y,
                      translateX: "-50%",
                      translateY: "-50%",
                    }}
                  />
                )}
              </AnimatePresence>
            }
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="max-w-[400px] md:max-w-[400px] text-sm sm:text-lg md:text-2xl mx-auto text-center sm:text-right  md:text-left"
              variants={childVariants}
              transition={{ duration: 0.5, delay: 1.75 }}
            >
              With 8 years of experience, I ask the necessary (and sometimes the
              difficult questions) to create brands and products that focus on
              and prioritize people
            </motion.p>
          </div>
        </div>
        <motion.div
          className="overflow-hidden pb-2"
          style={{
            x: negativeX,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[110px] font-light"
            variants={childVariants}
          >
            lives by design
          </motion.h1>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
