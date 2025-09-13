import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="scroll-indicator"></div>
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Certifications />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
