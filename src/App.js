import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Facts from './components/Facts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Education />
      <Facts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
