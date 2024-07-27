import React, { useState } from 'react';
import { FiInfo } from "react-icons/fi";


const About = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="about" className="bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10">
      <button
        onClick={toggleAccordion}
        className="text-2xl font-semibold mb-4"
      >
        <FiInfo className='inline'/> About Me
      </button>
      {isOpen && (
        <div className="w-full flex flex-col items-center">
          <img src="/profile.png" id="profile-pic" alt="Profile" className="border-gray-100 dark:border-gray-900 w-48 h-48 rounded-full shadow-lg" />
          <p className="mt-6 text-center">
          Hello 🙋‍♂️ I'm <span className='font-medium'>Manos</span>, I live in Heraklion, Crete and I'm 28 years old. I'm a recent computer engineering graduate with a balanced knowledge in both hardware and software 🧑‍💻.
          </p>
          <p className="mt-2 text-center">
            I received my integrated masters' degree from Computer Engineering & Informatics Department at University of Patras, and I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team 🌼.
          </p>
          <p className="mt-2 text-center">
            I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to contact me 🌍.
          </p>
        </div>
      )}
    </section>
  );
};

export default About;
