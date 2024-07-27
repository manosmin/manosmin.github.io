import React, { useState } from 'react';

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="education" className="bg-gray-900 text-gray-200 p-10">
      <button
        onClick={toggleAccordion}
        className="text-gray-200 text-2xl font-semibold mb-4"
      >
        <h2 className="text-2xl font-semibold">Education</h2>
      </button>
      {isOpen && (
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.ceid.upatras.gr"
            target="_blank"
            className="font-medium text-gray-200 hover:underline"
          >
            🎓 Computer Engineering and Informatics Department, University of Patras
          </a>
          <p>09/2014 &ndash; 07/2024</p>
          <p className="text-gray-200 inline font-medium">Grade: </p>
          <p className="text-gray-200 inline">6.57/10.0</p>
          <br />
          <p className="text-gray-200 inline font-medium">Thesis: </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nemertes.library.upatras.gr/items/b24439d5-3bd7-4de0-b9f6-8f67c0ddf3aa"
            className="hover:underline inline"
          >
            "Process mining on cyber-physical systems: Liqueur Plant case study"&nbsp;
          </a>
          <p className="text-gray-200 italic inline">
          (Integration of a data-driven methodology named "process mining" on a liqueur production system in order to reveal, analyze and find ways to improve the production process)
          </p>
        </div>
      )}
    </section>
  );
};

export default Education;
