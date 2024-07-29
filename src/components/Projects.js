import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { MdComputer, MdPerson } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";


function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };


    const ProjectInfo2 = {
      Title: 'Movie Picker Web App',
      Used: 'React.js, Bootstrap 5',
      Description: 'A web application that uses a REST API to provide a search engine for movies, games, series etc.',
      Link: 'https://github.com/manosmin/movie-picker-app',
      Date: '02/2024',
      Icon: <MdPerson className='inline' />
    }

    const ProjectInfo1 = {
      Title: 'Virus Contact Tracing Website',
      Used: 'Node.js, Express.js, Passport.js, Leaflet.js, Chart.js, Bootstrap 3, MongoDB',
      Description: 'A website that helps users track and manage their potential exposure to virus carriers by crowd-sourcing data about their visits to various places in Patras, Greece.',
      Link: 'https://github.com/manosmin/ceid-web',
      Date: '05/2022',
      Icon: <FaUniversity className='inline' />
    }

    const ProjectInfo3 = {
      Title: 'manosmin.github.io',
      Used: 'React.js, Tailwind CSS',
      Description: 'A fully responsive web page used as a personal portfolio, in order to showcase my education, experience, projects etc.',
      Link: 'https://github.com/manosmin/manosmin.github.io',
      Date: '07/2024',
      Icon: <MdPerson className='inline' />
    }

    const ProjectInfo4 = {
      Title: 'Decentralized Systems Implementation',
      Used: 'Python',
      Description: 'Implementation of Chord and Pastry distributed hashing table algorithms (DHTs) and experimental evaluation using real data sets scraped from the web.',
      Link: 'https://github.com/CPP-Bot-78/Decentralized-Systems-Technologies',
      Date: '12/2023',
      Icon: <FaUniversity className='inline' />
    }

    const ProjectInfo5 = {
      Title: 'Advanced Microprocessors Programming',
      Used: 'Assembly, C++',
      Description: 'Programming of an 8-bit AVR microcontroller to operate various smart tasks as highway intersection traffic lights, household appliance moving in empty spaces and house alarm system.',
      Link: 'https://github.com/manosmin/ceid-advanced-microprocessors',
      Date: '05/2021',
      Icon: <FaUniversity className='inline' />
    }


  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="skills" onClick={toggleAccordion} className="cursor-pointer">
        <h2 className="text-2xl font-semibold">
        <MdComputer className='inline'/> Projects
        </h2>
      </div>
      {isOpen && (<div className='mt-8 cursor-normal'>
        <p> During my university years, I've implemented several different projects together with my fellow students 👬. From machine learning and routing algorithms implementations, to full stack web development, microcontroller programming and DBMS design. Below you can see some major projects from my studies and some personal ones. </p>
        <ProjectItem myInfo={ProjectInfo3}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo2}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo4}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo1}></ProjectItem>
        <ProjectItem myInfo={ProjectInfo5}></ProjectItem>
        </div>
        )}
    </div>
  )
}

export default Projects