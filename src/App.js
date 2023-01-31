import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Proyects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
