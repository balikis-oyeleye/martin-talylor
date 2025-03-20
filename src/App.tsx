import Experience from "./components/experience";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-primary h-full">
        <Hero />
        <Experience />
      </main>
    </>
  );
};

export default App;
