import React, { useState } from 'react';
import { FiInfo } from "react-icons/fi";


const About = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="about" onClick={toggleAccordion} className="cursor-pointer">
        <h2 className="text-2xl font-semibold">
          <FiInfo className='inline'/> About Me 
        </h2>
      </div>
        {isOpen && (
          <div className="w-full flex flex-col items-center text-center mt-8 cursor-normal">
            <img src="/profile.png" id="profile-pic" alt="Profile" className="border-gray-100 dark:border-gray-900 w-48 h-48 rounded-full shadow-lg" />
            <p className="mt-6">
            🙋‍♂️ My name is <span className='font-medium'>Manos</span>, I live in Heraklion, Greece, I'm 28 years old and I'm a recent Computer Engineering graduate 🧑‍🎓.
            </p>
            <p className="mt-2">
              I received my masters' degree from <span className='font-medium'>Computer Engineering & Informatics Department at University of Patras</span>. During my studies, I've built a strong foundation in both hardware and software 👨‍💻. 
            </p>
            <p className="mt-2">
              My degree courses focused mainly on algorithms and data structures, while my thesis' subject was process mining, a field between data mining and process science.
            </p>
            <p className="mt-2">
              Nowadays, I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team 🌼.
            </p>
            <p className='mt-2'>I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to <a className="underline" href="mailto:manosmin@hotmail.com">contact me</a> for any opportunities 🌍.</p>
          </div>
        )}
      </div>
  );
};

export default About;
