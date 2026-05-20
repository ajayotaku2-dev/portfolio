import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Dynamic Futuristic Grid Overlay Background */}
      <div className="cyber-grid" />

      {/* Main Portals & Dashboard Cockpit Panels */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Navigation HUD top bar */}
        <Navbar />

        {/* Home / Hero Canvas */}
        <Hero />

        {/* Profile Card & Traits */}
        <AboutMe />

        {/* Interactive Ability Grid */}
        <Skills />

        {/* Quest Logs Projects */}
        <Projects />

        {/* Accomplished hackathons & badges */}
        <Achievements />

        {/* Education level maps */}
        <Education />

        {/* Transmission secure portal inputs */}
        <Contact />

        {/* Diagnostics & Coords bottom bar */}
        <Footer />
      </div>
    </>
  );
}

export default App;
