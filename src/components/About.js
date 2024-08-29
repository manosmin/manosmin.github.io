import React from 'react';
import { useIsVisible } from '../App';
import { FaInfoCircle } from "react-icons/fa";

const About = () => {

  const [containerRef1, isVisible1] = useIsVisible({});
  const [containerRef2, isVisible2] = useIsVisible({});
  const [containerRef3, isVisible3] = useIsVisible({});
  const [containerRef4, isVisible4] = useIsVisible({});
  const [containerRef5, isVisible5] = useIsVisible({});
  const [containerRef6, isVisible6] = useIsVisible({});
  const [containerRef7, isVisible7] = useIsVisible({});

  return (
    <div id="about" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24'>
      <div className='flex justify-between mb-8'>
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
          <p className='flex justify-center items-center'><FaInfoCircle className='mr-2' /> About Me</p>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <img
          ref={containerRef2}
          src="/profile.png"
          id="profile-pic"
          alt="Profile"
          className={`border-2 bg-gray-50 dark:bg-gray-800 rounded-full ${isVisible2 && 'animate-fade-in-down md:animate-slide-in-left'} opacity-0 border-gray-200 dark:border-gray-700 w-64 h-64 md:w-96 md:h-96 shadow-lg`}
          style={{ "--delay": 0.2 + "s" }}
        />
        <div className="flex flex-col space-y-4 mt-8 md:mt-0 text-center md:text-left">
          <p ref={containerRef3} className={`${isVisible3 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
            My name is <span className='font-semibold'>Manos</span> and I'm a Computer Engineer currently based in Heraklion, Greece.
          </p>
          <p ref={containerRef4} className={`${isVisible4 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
            I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras, where I developed a strong foundation in both hardware and software. Throughout my studies, I found myself constantly drawn to the endless possibilities that computers and technology offer, whether it's solving complex problems or creating innovative solutions.
          </p>
          <p ref={containerRef5} className={`${isVisible5 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
            At this moment, I'm mostly interested in software engineering and web development, and I'm eager to bring my skills to a dynamic team where I can continue to learn and grow.
          </p>
          <p ref={containerRef6} className={`${isVisible6 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
            I'm ready to roll up my sleeves and contribute to real-world projects that make a difference. If you're looking for someone who's not just skilled, but also passionate about technology, I'd love to connect and explore opportunities together!
          </p>
          <div ref={containerRef7} className={`${isVisible7 && 'animate-fade-in'} opacity-0 flex flex-col space-y-2`} style={{ "--delay": 0.4 + "s" }}>
            <div className="flex">
              <span className="font-semibold">Name:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">Manos Minadakis</span>
            </div>
            <div className="flex">
              <span className="font-semibold">Location:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">Heraklion, Greece</span>
            </div>
            <div className="flex">
              <span className="font-semibold">Email:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400"><a className="hover:underline" href="mailto:manosmin@hotmail.com">manosmin@hotmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default About;
