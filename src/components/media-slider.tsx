import { motion } from "framer-motion";

const MediaSlider = () => {
  const media = [
    {
      src: "/image/guy.png",
      type: "image",
      name: "Martin Taylor",
    },
    {
      src: "/image/cycling.webp",
      type: "image",
      name: "Cycling",
    },
    {
      src: "/video/skating.mp4",
      type: "video",
      name: "Skating",
    },
    {
      src: "/image/kayaking.webp",
      type: "image",
      name: "Kayaking",
    },
  ];

  return (
    <section className="mx-auto pt-36 pb-40 overflow-x-hidden">
      <div className="w-full py-8">
        <motion.ul
          className="flex items-center gap-8"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...media, ...media].map((item, index) => (
            <li
              key={index}
              className="w-[600px] h-[400px] relative flex-shrink-0"
            >
              <div className="absolute inset-0">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    playsInline
                    autoPlay
                    muted
                    loop
                  />
                )}
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default MediaSlider;
