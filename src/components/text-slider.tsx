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
    <section className="mx-auto pt-36 pb-40">
      <div className="bg-[#38302b] w-full -rotate-1 py-8">
        <ul className="flex items-center gap-16 md:gap-24 overflow-x-hidden">
          {text.map((item) => (
            <li
              key={item}
              className="text-secondary text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TextSlider;
