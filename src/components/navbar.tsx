import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { useHideOnScroll } from "../hooks/hide-on-scroll";

const Navbar = () => {
  const show = useHideOnScroll();

  const NAV_LINKS = ["home", "about", "services", "portfolio", "contact"];

  const [isOpen, setIsOpen] = useState(false);

  const capitalizeFirstLink = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const containerVariants = {
    initial: { y: "-100%" },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      y: "-100%",
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <header
        className={`bg-tertiary text-secondary p-4 md:p-6 fixed top-0 w-full z-20 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <p className="text-lg">Martin Taylor</p>
          </a>
          <button
            className="bg-[#2b2622] px-3 py-1 rounded-md cursor-pointer magnetic relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-tertiary z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <BiX size={30} color="#ffffcf" />
            </button>
            <motion.ul
              className="flex flex-col items-center gap-4"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link} variants={itemVariants}>
                  <a
                    href="#"
                    className="text-lg md:text-2xl text-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    {capitalizeFirstLink(link)}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
