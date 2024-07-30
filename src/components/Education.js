import React, { useState } from 'react';
import { FiBookOpen } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowDown, setIsArrowDown] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsArrowDown(!isArrowDown);
  };

  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="education" onClick={toggleAccordion} className="flex justify-between cursor-pointer">
        <h2 className="animate-slide-in-left opacity-0 text-2xl font-semibold" style={{ "--delay": 0.4 + "s" }}>
        <p className='flex justify-center items-center'><FiBookOpen className='mr-2'/> Education</p>
        </h2>
        {isArrowDown ? <IoIosArrowDown size={25}/> : <IoIosArrowUp size={25}/>}
      </div>
      {isOpen && (
        <div className="mt-8 cursor-normal animate-slide-in opacity-0" style={{ "--delay": 0.2 + "s" }}>
          <ul className='list-none space-y-1'>
          <li><a
            rel="noopener noreferrer"
            href="https://www.ceid.upatras.gr"
            target="_blank"
            className="font-medium hover:underline"
          >
            MEng, Computer Engineering and Informatics Department (CEID)
          </a> 🎓</li>
          <li className='font-medium' >University  of Patras</li>
          <li><p>09/2014 &ndash; 07/2024</p></li>
          <li><p className="inline font-medium" >Grade: </p> <p className="inline">6.57/10.0 (2:2)</p></li>
          <li><p className="inline font-medium" >Thesis: </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nemertes.library.upatras.gr/items/b24439d5-3bd7-4de0-b9f6-8f67c0ddf3aa"
            className="hover:underline inline"
          >
            "Process mining on cyber-physical systems: Liqueur Plant case study"
          </a>&nbsp;
          <p className="italic inline">
          (Integration of a data-driven methodology named "process mining" on a liqueur production system in order to reveal, analyze and find ways to improve the production process)
          </p></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Education;
