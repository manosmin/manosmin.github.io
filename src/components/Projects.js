import React, { useState } from 'react';

function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

  return (
    <section id="projects" className="bg-gray-900 text-gray-200 p-10">
        <button
        onClick={toggleAccordion}
        className="text-gray-200 text-2xl font-semibold mb-4"
      >
        <h2 className="text-2xl font-semibold">Projects</h2>
      </button>
      {isOpen && (
        <p>Check my profile on <a rel="noopener noreferrer"
        target="_blank"
        href="https://www.github.com/manosmin"
        className="font-medium hover:underline">GitHub</a> 🔗</p>
        )}
    </section>
  )
}

export default Projects