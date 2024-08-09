import React from 'react';
import { useIsVisible } from '../App';
import ProjectItem from './ProjectItem';
import { MdComputer } from "react-icons/md";



function Projects() {

  const [ containerRef1, isVisible1] = useIsVisible({})



    const ProjectInfo1 = {
      Title: 'Virus Contact Tracing Website',
      Used: 'Node.js, Express.js, Passport.js, Leaflet.js, Chart.js, JavaScript, HTML, Bootstrap 4, MongoDB',
      Description: 'A website that helps users track and manage their potential exposure to virus carriers by crowd-sourcing data about their visits to various places in Patras, Greece.',
      Link: 'https://github.com/manosmin/ceid-web',
      Date: '05/2022'
    }

    const ProjectInfo2 = {
      Title: 'Movie Picker Web App',
      Used: 'React.js, HTML, Bootstrap 5',
      Description: 'A web application that uses a REST API to provide a search engine for movies, games, series etc.',
      Link: 'https://github.com/manosmin/movie-picker-app',
      Date: '02/2024'
    }

    const ProjectInfo3 = {
      Title: 'manosmin.github.io',
      Used: 'React.js, HTML, Tailwind CSS',
      Description: 'A fully responsive web page used as a personal portfolio, in order to showcase my education, experience, projects etc.',
      Link: 'https://github.com/manosmin/manosmin.github.io',
      Date: '07/2024'
    }

    const Projects = [ProjectInfo3, ProjectInfo2, ProjectInfo1]

  return (
    <div id="projects" className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 pt-48'>
      <div className="flex justify-between cursor-pointer">
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-slide-in-left'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><MdComputer className='mr-2'/> Projects</p>
        </h2>
      </div>
      <div className='mt-8 cursor-normal space-y-4'>
        {Projects.map((item, index) => ( <ProjectItem myInfo={item} index={index + 1} key={item.Title} /> ))}
      </div>
    </div>
  )
}

export default Projects