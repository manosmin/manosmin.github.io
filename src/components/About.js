import React, { useState } from 'react';
import { FiInfo } from "react-icons/fi";


const About = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='animate-fly-in-down bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="about" onClick={toggleAccordion} className="cursor-pointer">
        <h2 className="text-2xl font-semibold">
          <FiInfo className='inline'/> About Me 
        </h2>
      </div>
        {isOpen && ( 
          <div className="w-full flex flex-col items-center text-center mt-8 cursor-normal space-y-2">
            <img src="/profile.png" id="profile-pic" alt="Profile" className="mb-4 border-gray-100 dark:border-gray-900 w-48 h-48 rounded-full shadow-lg"  />
            <p>
            🙋‍♂️ My name is <span className='font-medium'>Manos</span>. I'm a Computer Engineer, currently located in Heraklion, 🇬🇷.
            </p>
            <p>
              I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras. During my studies, I've built a strong foundation in both hardware and software 👨‍💻. 
            </p>
            <p>
              My degree courses focused mainly on algorithms and data structures, while my thesis' subject was process mining, a field between data mining and process science 🧑‍🎓.
            </p>
            <p>
              Nowadays, I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team 🌼.
            </p>
            <p>I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to <a className="underline" href="mailto:manosmin@hotmail.com">contact me</a> for related opportunities 💬.</p>
          </div>
        )}
      </div>
  );
};

export default About;
