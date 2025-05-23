import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import LettersAnimation from './components/LettersAnimation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeAnimation from './components/ThreeAnimation';
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
  // if(containerRef.current) observer.unobserve (containerRef.current)
  }, [containerRef, options])
  return [containerRef, isVisible]
  }

  function App() {
    const [dark, setDark] = useState(false);
  
    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };
  
    return (
      <div className={`bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen ${dark ? 'dark' : ''}`}>
        <Header dark={dark} darkModeHandler={darkModeHandler} />
        <ThreeAnimation darkMode={dark} />
        <LettersAnimation />
        <div className="2xl:max-w-screen-xl md:max-w-screen-lg mx-auto w-full">
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
export default App;
