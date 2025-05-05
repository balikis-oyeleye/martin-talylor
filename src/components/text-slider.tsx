import { motion } from "framer-motion";

const TextSlider = () => {
  const text = [
    "Turkish Coffee",
    "Bali",
    "No-code Tools",
    "Travel",
    "English Premier League",
    "Framer",
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
  ];

  return (
    <section className="mx-auto pt-36 pb-40 overflow-x-hidden">
      <div className="bg-[#2d241f] w-full py-8 -rotate-1">
        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max will-change-transform pr-16"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...text, ...text].map((item, index) => (
            <span
              key={index}
              className="text-[#777760] text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TextSlider;
