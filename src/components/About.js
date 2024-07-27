import React, { useState } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="about" className="bg-gray-900 p-10">
      <button
        onClick={toggleAccordion}
        className="text-gray-200 text-2xl font-semibold mb-4"
      >
        {isOpen ? 'About Me' : 'About Me'}
      </button>
      {isOpen && (
        <div className="w-full flex flex-col items-center">
          <img src="/profile.png" id="profile-pic" alt="Profile" className="w-48 h-48 rounded-full shadow-lg" />
          <p className="mt-6 text-center text-gray-200">
            My name is <span className='font-semibold'>Manos</span>, I live in Heraklion, Greece and I'm 28 years old. I'm a recent Computer Engineering graduate with a balanced knowledge in both hardware and software.
          </p>
          <p className="mt-2 text-gray-200 text-center">
            I received my masters' degree from <span className='font-semibold'>Computer Engineering and Informatics Department at University of Patras</span> and I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team.
          </p>
          <p className="mt-2 text-gray-200 text-center">
            I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to contact me.
          </p>
        </div>
      )}
    </section>
  );
};

export default About;
