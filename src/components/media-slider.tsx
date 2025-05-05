import { motion } from "framer-motion";

const MediaSlider = () => {
  const media = [
    {
      src: "/image/guy.webp",
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
    <section className="mx-auto pt-36 pb-40 overflow-x-hidden container">
      <div className="w-full py-8 relative">
        <motion.div
          className="flex gap-8 w-max will-change-transform pr-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {[...media, ...media].map((item, index) => (
            <div
              key={index}
              className="md:w-[600px] md:h-[400px] w-[300px] h-[200px] relative flex-shrink-0"
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSlider;
