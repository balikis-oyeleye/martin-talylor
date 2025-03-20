import { BsAsterisk } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="min-h-60 text-secondary py-44 container mx-auto px-2">
      <div
        className="flex flex-col justify-center items-center 
       gap-y-4 lg:gap-y-8"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-[110px] font-light relative">
          Hello! I'm Martin
          <BsAsterisk
            color="#555"
            className="absolute -top-0.5 -right-6 md:-right-10 size-4 sm:size-6 lg:size-10"
          />
        </h1>

        <div className="flex items-center sm:items-end lg:items-center flex-col md:flex-row-reverse gap-3 md:gap-8 ">
          <h1 className="text-4xl sm:text-5xl lg:text-[110px] font-bold">
            A designer
          </h1>
          <p className="max-w-[400px] md:max-w-[400px] text-sm sm:text-lg md:text-2xl mx-auto text-center sm:text-right  md:text-left ">
            With 8 years of experience, I ask the necessary (and sometimes the
            difficult questions) to create brands and products that focus on and
            prioritize people
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-[110px] font-light">
          lives by design
        </h1>
      </div>
    </section>
  );
};

export default Hero;
