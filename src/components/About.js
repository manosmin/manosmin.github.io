import React, { useState } from 'react';
import { FiInfo } from "react-icons/fi";


const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="about" onClick={toggleAccordion} className="cursor-pointer">
        <h2 className="animate-slide-in opacity-0 text-2xl font-semibold" style={{ "--delay": 0.2 + "s" }}>
          <FiInfo className='inline'/> About Me 
        </h2>
      </div>
        {isOpen && ( 
          <div className="w-full flex flex-col items-center text-center mt-8 cursor-normal space-y-2"  >
            <img src="/profile.png" id="profile-pic" alt="Profile" className="animate-fly-in-down opacity-0 mb-4 border-gray-100 dark:border-gray-900 w-48 h-48 rounded-full shadow-lg" style={{ "--delay": 0.2 + "s" }}  />
            <p className='animate-slide-in opacity-0' style={{ "--delay": 0.6 + "s" }}>
            Hello 🙋‍♂️, my name is <span className='font-medium'>Manos</span> and I'm a computer engineer, currently based in Heraklion, Greece 🇬🇷.
            </p>
            <p className='animate-slide-in-left opacity-0' style={{ "--delay": 1.4 + "s" }}>
              I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras 🧑‍🎓. During my studies, I've built a strong foundation in both hardware and software 👨‍💻. 
            </p>
            <p className='animate-slide-in opacity-0' style={{ "--delay": 2.2 + "s" }}>
              My degree courses focused mainly on algorithms and data structures, while my diploma thesis' subject was process mining, a field between data mining and process science.
            </p>
            <p className='animate-slide-in-left opacity-0' style={{ "--delay": 3 + "s" }}>
              Nowadays, I'm on the lookout for my first professional experience in the tech field, with a particular interest in <span className='font-medium'>software development</span>, seeking to apply my skills and grow within a dynamic team 🌼.
            </p>
            <p className='animate-slide-in opacity-0' style={{ "--delay": 3.8 + "s" }}>I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to <a className="hover:underline" href="mailto:manosmin@hotmail.com">contact me</a> for related opportunities 💬.</p>
          </div>
        )}
      </div>
  );
};

export default About;
