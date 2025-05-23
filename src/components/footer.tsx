import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { IoMdArrowUp } from "react-icons/io";

const Footer = () => {
  const links = [
    {
      social: "Instagram",
      link: "https://www.instagram.com/balikis.dev/",
    },
    {
      social: "X (Twitter)",
      link: "https://x.com/balikis_oyeleye",
    },
    {
      social: "Linkedin",
      link: "https://www.linkedin.com/in/balikis-oyeleye/",
    },
    {
      social: "Github",
      link: "https://github.com/balikis-oyeleye",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="container mx-auto p-4 sm:p-2 sticky bottom-0">
      <div className="overflow-x-hidden flex flex-col justify-end pb-4">
        {/* main */}
        <div>
          <div className="overflow-hidden w-full mb-1">
            <motion.div
              className="flex w-max gap-28 flex-nowrap pr-28 will-change-transform"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, i) => (
                <h2
                  key={i}
                  className="text-[120px] md:text-[220px] font-semibold whitespace-nowrap text-secondary mb-0 md:mb-14 leading-none"
                >
                  Let&apos;s work together
                </h2>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center md:justify-between items-center flex-col md:flex-row gap-8">
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.social}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary gap-2 md:text-lg text-xl font-medium"
                  >
                    {item.social}
                    <MdOutlineArrowOutward />
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center text-secondary gap-2 md:text-xl text-base font-medium max-w-[330px] text-center md:text-start mx-auto md:mx-0">
              I’m currently available for new work, let me know if you need a
              digital designer. I’d love to talk about the next big thing!
            </p>
          </div>
          <div className="flex justify-between items-center mt-8 md:mt-20 flex-col md:flex-row md:gap-8 gap-3">
            <a
              href="mailto:oyeleyebal@gmail.com"
              className="flex items-center text-secondary gap-2 md:text-xl text-base font-medium"
            >
              oyeleyebal@gmail.com
            </a>
            <p className="flex items-center text-secondary gap-2 md:text-xl text-base font-medium text-center">
              @Develop by Balikis✨
            </p>
            <button
              className="flex items-center text-secondary gap-2 md:text-xl text-base font-medium cursor-pointer"
              onClick={scrollToTop}
            >
              <span>Back To Top</span> <IoMdArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
