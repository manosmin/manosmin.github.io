import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Facts from './components/Facts';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


export function useIsVisible(options) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible ] = useState(false)
  const callbackFunction = (entries) => { const [entry] = entries
  setIsVisible(entry.isIntersecting)
  }
  useEffect(() => {
  const observer = new IntersectionObserver (callbackFunction, options) 
  if (containerRef.current) observer.observe (containerRef.current)
  return () => {
  }
  if(containerRef.current) observer.unobserve (containerRef.current)
  }, [containerRef, options])
  return [containerRef, isVisible]
  }

function App() {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 flex flex-col min-h-screen">
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
