import React from 'react';
import { useIsVisible } from '../App';
import { FiInfo } from "react-icons/fi";



const About = () => {

  const [ containerRef1, isVisible1] = useIsVisible({})

  const [ containerRef2, isVisible2] = useIsVisible({})

  const [ containerRef3, isVisible3] = useIsVisible({})

  const [ containerRef4, isVisible4] = useIsVisible({})

  const [ containerRef5, isVisible5] = useIsVisible({})

  const [ containerRef6, isVisible6] = useIsVisible({})

  return (
    <div className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 mb-10'>
      <div id="about" className="flex justify-between cursor-pointer">
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-slide-in-left'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><FiInfo className='mr-2'/> About Me </p>
        </h2>
      </div>
        <div className="w-full flex flex-col items-center text-center mt-8 cursor-normal space-y-2"  >
            <img ref={containerRef2} src="/profile.png" id="profile-pic" alt="Profile" className={`border-2 bg-gray-300 dark:bg-gray-800 ${isVisible2 && 'animate-fade-in-down'} opacity-0 mb-4 border-gray-900 dark:border-gray-100 w-48 h-48 rounded-full shadow-lg`} style={{ "--delay": 0.2 + "s" }}  /> 
              <p ref={containerRef3} className={`${isVisible3 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
              Hello 🙋‍♂️ I'm <span className='font-medium'>Manos</span>, a Computer Engineer currently based in Heraklion, Greece 🇬🇷.
              </p>
              <p ref={containerRef4} className={`${isVisible4 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
                I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras 🧑‍🎓. During my studies, I've built a strong foundation in both hardware and software 👨‍💻. 
              </p>
              <p ref={containerRef5} className={`${isVisible5 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
                At this moment, I'm on the lookout for my first professional experience in the tech field, with a particular interest in software engineering and web development, where I can apply my skills and grow within a dynamic team 🌼.
              </p>
              <p ref={containerRef6} className={`${isVisible6 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>I'm eager to contribute to real-world projects and make a meaningful impact, so feel free to <a className="underline" href="mailto:manosmin@hotmail.com">contact me</a> for related opportunities 🌍.</p>
        </div>
      </div>
  );
};

export default About;
