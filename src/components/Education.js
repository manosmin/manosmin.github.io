import React, { useState } from 'react';
import { FiBookOpen } from "react-icons/fi";

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="education" className="bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10">
      <button
        onClick={toggleAccordion}
        className="text-2xl font-semibold mb-4"
      >
        <FiBookOpen className='inline'/> Education
      </button>
      {isOpen && (
        <div>
          <ul className='list-none'>
          <li className='mt-4'><a
            rel="noopener noreferrer"
            href="https://www.ceid.upatras.gr"
            target="_blank"
            className="font-medium hover:underline"
          >
            MEng, Computer Engineering & Informatics
          </a> 🎓</li>
          <li className='mt-1'>University  of Patras</li>
          <li className='mt-1'><p>09/2014 &ndash; 07/2024</p></li>
          <li className='mt-1'><p className="inline font-medium">Grade: </p>
          <p className="inline">6.57/10.0</p></li>
          <li className='mt-1'><p className="inline font-medium">Thesis: </p>
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
    </section>
  );
};

export default Education;