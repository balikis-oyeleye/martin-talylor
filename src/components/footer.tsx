import { IoMdArrowUp } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";

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

  return (
    <footer className="container mx-auto p-4 sm:p-2">
      <div className="min-h-screen max-h-[1200px] overflow-x-hidden flex flex-col justify-end pb-6">
        {/* main */}
        <div>
          <h2 className="text-[120px] md:text-[220px] font-semibold whitespace-nowrap text-secondary mb-0 md:mb-20 lg:mb-40 xl:mb-48">
            Let's work together
          </h2>
          <div className="flex justify-between md:items-center flex-col md:flex-row gap-8">
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
            <p className="flex items-center text-secondary gap-2 md:text-xl text-2xl font-medium max-w-[330px]">
              I’m currently available for new work, let me know if you need a
              digital designer. I’d love to talk about the next big thing!
            </p>
          </div>
          <div className="flex justify-between items-center mt-20 flex-col md:flex-row gap-8">
            <a
              href="mailto:oyeleyebal@gmail.com"
              className="flex items-center text-secondary gap-2 md:text-xl text-2xl font-medium"
            >
              oyeleyebal@gmail.com
            </a>
            <p className="flex items-center text-secondary gap-2 md:text-xl text-2xl font-medium text-center">
              @ Develop by Balikis with Vite✨
            </p>
            <button className="flex items-center text-secondary gap-2 md:text-xl text-2xl font-medium self-end cursor-pointer">
              <span>Back To Top</span> <IoMdArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
