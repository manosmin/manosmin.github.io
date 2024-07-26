import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
