import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-5 flex flex-col items-center">
      <img src="/profile.jpg" id="profile-pic" alt="Profile" className="w-32 h-32 rounded-full shadow-lg" />
      <h2 className="text-2xl text-white font-semibold mt-4">Hello 👋</h2>
      <p className="mt-2 text-center text-white">I'm Manos, I live in Heraklion, Greece and I am 28 years old. I'm a recent Computer Engineering graduate with a balanced knowledge in both hardware and software.</p>
      <p className="mt-2 text-white text-center"> I received my masters' degree from Computer Engineering and Informatics Department at University of Patras and I'm on the lookout for my first professional experience in the tech field, seeking to apply my skills and grow within a dynamic team.</p><p className="mt-2 text-white text-center">I am eager to contribute to real-world projects and make a meaningful impact.</p>
    </section>
  );
};

export default About;