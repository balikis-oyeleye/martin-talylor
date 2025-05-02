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
        <motion.ul
          className="flex items-center gap-16 md:gap-24"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate the text array to make infinite loop seamless */}
          {[...text, ...text].map((item, index) => (
            <li
              key={index}
              className="text-[#777760] text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default TextSlider;
