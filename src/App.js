import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import LettersAnimation from './components/LettersAnimation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeAnimation from './components/ThreeAnimation';
import './App.css';
import ReactGA from 'react-ga4';

export function useIsVisible(options) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible ] = useState(false)
  const callbackFunction = useCallback((entries) => { 
    const [entry] = entries
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [isVisible])
  useEffect(() => {
  const observer = new IntersectionObserver (callbackFunction, options) 
  const currentRef = containerRef.current
  if (currentRef) observer.observe (currentRef)
  return () => {
    if(currentRef) observer.unobserve (currentRef)
  }
  }, [callbackFunction, options])
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
      ReactGA.initialize('G-CZYL3VKDGW');
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

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
