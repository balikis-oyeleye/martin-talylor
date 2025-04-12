import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TextSlider from "./components/text-slider";
import WhatIDo from "./components/what-i-do";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-primary h-full">
        <Hero />
        <Experience />
        <TextSlider />
        <WhatIDo />
      </main>
    </>
  );
};

export default App;
