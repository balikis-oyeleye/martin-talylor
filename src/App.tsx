import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TextSlider from "./components/text-slider";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-primary h-full">
        <Hero />
        <Experience />
        <TextSlider />
      </main>
    </>
  );
};

export default App;
