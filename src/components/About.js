import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 p-10 flex flex-col items-center">
      <img src="/profile.jpg" id="profile-pic" alt="Profile" className="w-48 h-48 rounded-full shadow-lg" />
      <h2 className="mb-4 mt-4 text-2xl text-slate-200	font-semibold ">About Me</h2>
      <p className="mt-2 text-center text-slate-200">My name is <span className='font-semibold'>Manos</span>, I live in Heraklion, Greece and I'm 28 years old. I'm a recent Computer Engineering graduate with a balanced knowledge in both hardware and software.</p>
      <p className="mt-2 text-slate-200 text-center"> I received my masters' degree from <span className='font-semibold'>Computer Engineering and Informatics Department at University of Patras</span> and I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team.</p><p className="mt-2 text-slate-200 text-center">I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to contact me.</p>
    </section>
  );
};

export default About;
