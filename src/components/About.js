import React from 'react';
import { useIsVisible } from '../App';
import { FaInfoCircle, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

new Typewriter('#typewriter', {
  strings: ['Emmanouil Minadakis'],
  autoStart: true,
});

const About = () => {

  const [containerRef1, isVisible1] = useIsVisible({});
  const [containerRef2, isVisible2] = useIsVisible({});
  const [containerRef3, isVisible3] = useIsVisible({});
  const [containerRef4, isVisible4] = useIsVisible({});
  const [containerRef5, isVisible5] = useIsVisible({});

  return (
    <div id="about" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24 '>
      <div className='flex justify-between mb-8'>
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
          <p className='flex justify-center items-center'><FaInfoCircle className='mr-2' /> About Me</p>
        </h2>
      </div>
      <div className="flex flex-col 2xl:flex-row items-center md:space-x-8 overflow-x-visible">
        <img
          ref={containerRef2}
          src="/profile.png"
          id="profile-pic"
          alt="Profile"
          className={`border-2 bg-gray-50 dark:bg-gray-700 rounded-full ${isVisible2 && 'animate-fade-in 2xl:animate-fade-in'} opacity-0 border-gray-200 dark:border-gray-800 w-64 h-64 xl:w-72 xl:h-72 2xl:w-96 2xl:h-96 shadow-lg`}
          style={{ "--delay": 0.4 + "s" }}
        />
        <div ref={containerRef3} className={`${isVisible3 && 'animate-fade-in 2xl:animate-fade-in'} opacity-0 flex flex-col space-y-2 mt-8 text-center 2xl:text-left`} style={{ "--delay": 0.4 + "s" }}>
          <p>
          I'm <span className='font-semibold'>Manos</span>, a Junior Software Developer currently based in <span className='underline decoration-dotted underline-offset-4'>Heraklion, Greece</span>.
          </p>
          <p>Passionate about coding and problem solving, with a strong foundation in computer science, gained through my studies at University of Patras. </p><p> Eager to expand my skills in software development, cloud technologies and software architectures.
          </p>
          <p>Feel free to connect with me for any opportunities, collaborations, or discussions about technology!</p>
          <div ref={containerRef4} className={`${isVisible4 && 'animate-fade-in'} opacity-0 flex flex-col space-y-2`} style={{ "--delay": 0.4 + "s" }}>
            <div className="flex">
              <span className="font-semibold uppercase">Name:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">
              {isVisible4 && <Typewriter
                options={{delay: 20, loop: false}}
                onInit={(typewriter) => {
                  typewriter.pauseFor(500)
                  .typeString('Manos Minadakis')
                  .start()
                }}
              />}
              </span>
            </div>
            <div className="flex">
              <span className="font-semibold uppercase">Location:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">
              {isVisible4 && <Typewriter
                options={{delay: 20, loop: false}}
                onInit={(typewriter) => {
                  typewriter.pauseFor(1000)
                  .typeString('Heraklion, Greece')
                  .start()
                }}
              />}
              </span>
            </div>
            <div className="flex">
              <span className="font-semibold uppercase">Email:</span>
              <span className="ml-4 text-gray-600 dark:text-gray-400">
              {isVisible4 && <Typewriter
                options={{delay: 20, loop: false}}
                onInit={(typewriter) => {
                  typewriter.pauseFor(1500)
                  .typeString('manosmin@hotmail.com')
                  .start()
                }}
              />}
                </span>
            </div>
          </div>
          <ul className='flex flex-row items-center space-x-4 md:items-start md:justify-start'>
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
          </ul>
          </div>
      </div>
      </div>
  );
};

export default About;
