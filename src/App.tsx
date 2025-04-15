import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MediaSlider from "./components/media-slider";
import Navbar from "./components/navbar";
import TextSlider from "./components/text-slider";
import WhatIDo from "./components/what-i-do";
import { Preloader } from "./components/preloader"; // import the preloader
import Cursor from "./components/cursor";

const App = () => {
  return (
    <>
      <Preloader />;
      <Cursor />
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
