import { motion } from "framer-motion";

const variants = {
  initial: { y: 0 },
  animate: {
    y: "-100%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#ffffb7]  flex items-center justify-center z-[9999]"
      variants={variants}
      initial="initial"
      animate="animate"
    />
  );
};
