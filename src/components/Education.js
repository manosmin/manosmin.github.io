import React from 'react';
import { useIsVisible } from '../App';
import { FaBookOpen } from "react-icons/fa";


const Education = () => {

  const [ containerRef1, isVisible1] = useIsVisible({})

  const [ containerRef2, isVisible2] = useIsVisible({})


  return (
    <div id="education" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10  py-24'>
      <div className="flex justify-between ">
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><FaBookOpen className='mr-2'/> Studies</p>
        </h2>
      </div>
      <div ref={containerRef2} className={`${isVisible2 && 'animate-fade-in'} mt-8 space-y-2 md:p-6 p-2 cursor-normal opacity-0`} style={{ "--delay": 0.4 + "s" }}>
          <ul className='list-none space-y-1'>
          <li><a
            rel="noopener noreferrer"
            href="https://www.ceid.upatras.gr"
            target="_blank"
            className="font-semibold uppercase"
          >
          MEng in Computer Engineering and Informatics
          </a></li>
          <li className='font-semibold uppercase'>University of Patras</li>
          <li><p className="inline font-semibold uppercase" >Grade: </p> <p className="inline">6.57/10.0 (2:2)</p></li>
          <li><p className="inline font-semibold uppercase" >Thesis: </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nemertes.library.upatras.gr/items/b24439d5-3bd7-4de0-b9f6-8f67c0ddf3aa"
            className="underline decoration-dotted underline-offset-2 decoration-2 inline"
          >
            "Process mining on cyber-physical systems: Liqueur Plant case study"
          </a>&nbsp;
          <p className="italic inline">
          (Integration of a data-driven methodology named "process mining" on a liqueur production system in order to reveal, analyze and find ways to improve the production process)
          </p></li>
          <li><p className="inline font-semibold uppercase" >Coursework: </p> <p className="inline">Logic Design, Computer Architecture, Circuit Design, Digital Electronics, Microprocessors, Signal
Processing, Computer Networking, Shell Scripting, Object Oriented Programming, Data Structures, Numerical
Analysis, Database Systems, Distributed Systems</p></li>
          </ul>
        </div>
    </div>
  );
};

export default Education;
