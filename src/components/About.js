import React from 'react';
import { useIsVisible } from '../App';
import { FaInfoCircle, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

const About = () => {

  const [containerRef1, isVisible1] = useIsVisible({});
  const [containerRef2, isVisible2] = useIsVisible({});
  const [containerRef3, isVisible3] = useIsVisible({});

  return (
    <div id="about" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24'>
      <div className='flex justify-between mb-8'>
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
          <p className='flex justify-center items-center'><FaInfoCircle className='mr-2' /> About Me</p>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          ref={containerRef2}
          src="/profile.png"
          id="profile-pic"
          alt="Profile"
          className={`border-2 bg-gray-50 dark:bg-gray-800 rounded-full ${isVisible2 && 'animate-fade-in-down md:animate-slide-in-left'} opacity-0 border-gray-200 dark:border-gray-700 w-64 h-64 md:w-96 md:h-96 shadow-lg`}
          style={{ "--delay": 0.2 + "s" }}
        />
        <div ref={containerRef3} className={`${isVisible3 && 'animate-fade-in md:animate-slide-in'} opacity-0 flex flex-col space-y-4 mt-8 md:mt-0 text-center md:text-left`} style={{ "--delay": 0.2 + "s" }}>
          <p>
            My name is <span className='font-semibold'>Manos</span> and I'm a Computer Engineer currently based in Heraklion, Greece.
          </p>
          <p>
            I recently completed my masters' degree in Computer Engineering and Informatics at University of Patras, where I developed a strong foundation in both hardware and software. Throughout my studies, I found myself constantly drawn to the endless possibilities that computers and technology offer, whether it's solving complex problems or creating innovative solutions.
          </p>
          <p>
            At this moment, I'm mostly interested in software engineering and web development, and I'm eager to bring my skills to a dynamic team where I can continue to learn and grow.
          </p>
          <p>
            I'm ready to roll up my sleeves and contribute to real-world projects that make a difference. If you're looking for someone who's not just skilled, but also passionate about technology, I'd love to connect and explore opportunities together!
          </p>
          <div className='flex flex-col space-y-2'>
            <div className="flex">
              <span className="font-semibold uppercase">Name:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">Manos Minadakis</span>
            </div>
            <div className="flex">
              <span className="font-semibold uppercase">Location:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">Heraklion, Greece</span>
            </div>
            <div className="flex">
              <span className="font-semibold uppercase">Email:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400 underline decoration-dotted decoration-2 underline-offset-2">manosmin&lt;at&gt;hotmail&lt;dot&gt;com</span>
            </div>
          </div>
          <ul className="flex flex-row items-center space-x-4 md:items-start md:justify-start">
            <li>
              <a rel="noopener noreferrer" href="https://github.com/manosmin" className="flex items-center text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="github">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900  rounded-full p-2'>
                  <FaGithub size={20}/>
                </div>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://linkedin.com/in/manosmin" className="flex items-center text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="linkedin">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900  rounded-full p-2'>
                  <FaLinkedinIn size={20}/>
                </div>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" className="flex items-center text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="discord">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900  rounded-full p-2'>
                  <FaDiscord size={20}/>
                </div>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcVK4G_e28UQDwI2oQ?e=e7nrZb" className="flex items-center text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="CV">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900  rounded-full p-2'>
                  <IoDocument size={20}/>
                </div>
              </a>
            </li>
          </ul>
          </div>
      </div>
      </div>
  );
};

export default About;
