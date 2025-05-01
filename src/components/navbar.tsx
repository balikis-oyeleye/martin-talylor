import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const NAV_LINKS = ["home", "about", "services", "portfolio", "contact"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-tertiary text-secondary p-4 md:p-6 fixed top-0 w-full z-20">
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-tertiary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.ul
                className="flex flex-col items-center gap-4"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
              >
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link}
                    className="text-lg cursor-pointer magnetic"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
