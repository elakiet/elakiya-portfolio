import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaveDivider from './components/WaveDivider';

function App() {
  useEffect(() => {
    AOS.init({ once: true, easing: 'ease-out-cubic', offset: 60, duration: 700 });
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <WaveDivider from="red" to="black" />
      <About />
      <WaveDivider from="black2" to="black" flip />
      <Skills />
      <WaveDivider from="black" to="black2" />
      <Experience />
      <WaveDivider from="black2" to="black" flip />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
