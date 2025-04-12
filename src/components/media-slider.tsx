const MediaSlider = () => {
  const media = [
    {
      src: "/image/guy.avif",
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
    <section className="mx-auto pt-36 pb-40">
      <div className="w-full -rotate-1 py-8">
        <ul className="flex items-center gap-8 overflow-x-auto">
          {media.map((item) => (
            <li
              key={item.src}
              className="w-[600px] h-[400px] relative flex-shrink-0"
            >
              <div className="absolute inset-0">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover"
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
        </ul>
      </div>
    </section>
  );
};

export default MediaSlider;
