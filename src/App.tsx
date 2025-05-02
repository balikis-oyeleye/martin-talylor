import { Preloader } from "./components/preloader";
import Cursor from "./components/cursor";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { lazy, useEffect } from "react";

const Experience = lazy(() => import("./components/experience"));
const Footer = lazy(() => import("./components/footer"));
const Hero = lazy(() => import("./components/hero"));
const MediaSlider = lazy(() => import("./components/media-slider"));
const Navbar = lazy(() => import("./components/navbar"));
const TextSlider = lazy(() => import("./components/text-slider"));
const WhatIDo = lazy(() => import("./components/what-i-do"));

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
      <Preloader />
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
