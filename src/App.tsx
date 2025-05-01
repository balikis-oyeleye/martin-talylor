import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MediaSlider from "./components/media-slider";
import Navbar from "./components/navbar";
import TextSlider from "./components/text-slider";
import WhatIDo from "./components/what-i-do";
import { Preloader } from "./components/preloader"; // import the preloader
import Cursor from "./components/cursor";
import { IoMdArrowUp } from "react-icons/io";

const App = () => {
  return (
    <>
      <Preloader />;
      <Cursor />
      <Navbar />
      <div className="bg-primary h-full">
        <main className="relative z-10 bg-primary mb-72">
          <Hero />
          <Experience />
          <TextSlider />
          <WhatIDo />
          <MediaSlider />
        </main>
        <Footer />
      </div>
      <button className="flex items-center text-secondary gap-2 md:text-xl text-base font-medium self-end cursor-pointer fixed bottom-4 right-4">
        <span>Back To Top</span> <IoMdArrowUp />
      </button>
    </>
  );
};

export default App;
