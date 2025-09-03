import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import LettersAnimation from './components/LettersAnimation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeAnimation from './components/ThreeAnimation';
import './App.css';


export function useIsVisible(options) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible ] = useState(false)
  const callbackFunction = (entries) => { 
    const [entry] = entries
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }
  useEffect(() => {
  const observer = new IntersectionObserver (callbackFunction, options) 
  if (containerRef.current) observer.observe (containerRef.current)
  return () => {
    if(containerRef.current) observer.unobserve (containerRef.current)
  }
  }, [containerRef, options])
  return [containerRef, isVisible]
  }

  function App() {
    const [dark, setDark] = useState(true);
    const [isClicking, setIsClicking] = useState(false);
  
    const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
    };

    useEffect(() => {
      // Set dark mode by default
      document.body.classList.add("dark");
      
      const handleMouseDown = () => {
        setIsClicking(true);
      };

      const handleMouseUp = () => {
        setIsClicking(false);
      };

      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);
  
    return (
      <div className={`bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen ${isClicking ? 'cursor-custom-click' : 'cursor-custom'} ${dark ? 'dark' : ''}`}>
        <Header dark={dark} darkModeHandler={darkModeHandler} />
        <ThreeAnimation darkMode={dark} />
        <LettersAnimation />
        <div className="2xl:max-w-screen-xl md:max-w-screen-lg mx-auto w-full">
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
export default App;
