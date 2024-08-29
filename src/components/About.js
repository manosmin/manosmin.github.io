import React from 'react';
import { useIsVisible } from '../App';
import { FaInfoCircle } from "react-icons/fa";



const About = () => {

  const [ containerRef1, isVisible1] = useIsVisible({})

  const [ containerRef2, isVisible2] = useIsVisible({})

  const [ containerRef3, isVisible3] = useIsVisible({})

  const [ containerRef4, isVisible4] = useIsVisible({})

  const [ containerRef5, isVisible5] = useIsVisible({})

  const [ containerRef6, isVisible6] = useIsVisible({})

  return (
    <div id="about" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24'>
      <div className={`flex justify-between`}>
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><FaInfoCircle className='mr-2'/> About Me </p>
        </h2>
      </div>
        <div className="w-full flex mx-auto flex-col items-center text-center mt-8 cursor-normal space-y-2 md:p-6 p-2"  >
            <img ref={containerRef2} src="/profile.png" id="profile-pic" alt="Profile" className={`border-2 bg-gray-50 dark:bg-gray-800  ${isVisible2 && 'animate-fade-in-down'} opacity-0 mb-4 border-gray-800 dark:border-gray-50 w-56 h-56 rounded-full shadow-lg`} style={{ "--delay": 0.2 + "s" }}  /> 
              <p ref={containerRef3} className={`${isVisible3 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
              My name is <span className='font-semibold'>Manos</span> and I'm a Computer Engineer currently based in Heraklion, Greece.
              </p>
              <p ref={containerRef4} className={`${isVisible4 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
                I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras, where I developed a strong foundation in both hardware and software. Throughout my studies, I found myself constantly drawn to the endless possibilities that computers and technology offer, whether it's solving complex problems or creating innovative solutions.
              </p>
              <p ref={containerRef5} className={`${isVisible5 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
                At this moment, I'm excited to take the next step in my journey by diving into the professional world. I'm particularly interested in software engineering and web development, and I'm eager to bring my skills to a dynamic team where I can continue to learn and grow.
              </p>
              <p ref={containerRef6} className={`${isVisible6 && 'animate-fade-in'} opacity-0`} style={{ "--delay": 0.4 + "s" }}>I'm ready to roll up my sleeves and contribute to real-world projects that make a difference. If you're looking for someone who's not just skilled, but also passionate about technology, I'd love to <a className="hover:underline" href="mailto:manosmin@hotmail.com">connect</a> and explore opportunities together!</p>
        </div>
      </div>
  );
};

export default About;
