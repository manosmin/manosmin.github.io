import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { MdComputer } from "react-icons/md";

function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };


    const ProjectInfo1 = {
      Title: 'Movie Picker Web App',
      Used: 'React.js, Bootstrap 5',
      Description: 'A web application that uses a REST API to provide a search engine for movies, games, series etc.',
      Link: 'https://github.com/manosmin/movie-picker-app',
      Date: '02/2024'
    }

    const ProjectInfo2 = {
      Title: 'Virus Contact Tracing Website',
      Used: 'Node.js, Express.js, Passport.js, Leaflet.js, Chart.js, Bootstrap 3, MongoDB',
      Description: 'A website that helps users track and manage their potential exposure to virus carriers by crowd-sourcing data about their visits to various places in Patras, Greece.',
      Link: 'https://github.com/manosmin/ceid-web',
      Date: '05/2022'
    }

    const ProjectInfo3 = {
      Title: 'manosmin.github.io',
      Used: 'React.js, Tailwind CSS',
      Description: 'A fully responsive web page used as a personal portfolio, in order to showcase my education, experience, projects etc.',
      Link: 'https://github.com/manosmin/manosmin.github.io',
      Date: '07/2024'
    }

  return (
    <section id="projects" className="bg-gray-900 text-gray-200 p-10">
        <button
        onClick={toggleAccordion}
        className="text-gray-200 text-2xl font-semibold mb-4"
      >
        <MdComputer className='inline'/> Projects
      </button>
      {isOpen && (<div>
        <ProjectItem myInfo={ProjectInfo1}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo2}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo3}></ProjectItem>
        </div>
        )}
    </section>
  )
}

export default Projects