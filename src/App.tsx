import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MediaSlider from "./components/media-slider";
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
        <MediaSlider />
        <Footer />
      </main>
    </>
  );
};

export default App;
