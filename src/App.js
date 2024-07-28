import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Facts from './components/Facts';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="bg-gray-800 dark:bg-gray-300 flex flex-col min-h-screen">
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
