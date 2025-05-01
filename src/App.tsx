import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MediaSlider from "./components/media-slider";
import Navbar from "./components/navbar";
import TextSlider from "./components/text-slider";
import WhatIDo from "./components/what-i-do";
import { Preloader } from "./components/preloader";
import Cursor from "./components/cursor";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />;
      <Cursor />
      <Navbar />
      <div className="bg-primary h-full">
        <main className="relative z-10 bg-primary">
          <Hero />
          <Experience />
          <TextSlider />
          <WhatIDo />
          <MediaSlider />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
