import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ValueSection from "./components/ValueSection";
import Experience from "./components/Experience";
import Proyects from "./components/Proyects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ValueSection />
        <Experience />
        <Proyects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
