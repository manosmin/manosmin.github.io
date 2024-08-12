import React from 'react';
import { useIsVisible } from '../App';
import ProjectItem from './ProjectItem';
import { MdComputer } from "react-icons/md";



function Projects() {

  const [ containerRef1, isVisible1] = useIsVisible({})



    const ProjectInfo1 = {
      Title: 'Virus Contact Tracing Website',
      Used: ['Node.js', 'Express.js', 'Passport.js', 'Leaflet.js', 'Chart.js', 'JavaScript', 'HTML', 'Bootstrap 4', 'MongoDB'],
      Description: 'A website that helps users track and manage their potential exposure to virus carriers by crowd-sourcing data about their visits to various places in Patras, Greece.',
      Link: 'https://github.com/manosmin/ceid-web',
      Date: '2022/05',
      Team: 'Yes'
    }

    const ProjectInfo2 = {
      Title: 'Movie Picker Web App',
      Used: ['React.js', 'Bootstrap 5'],
      Description: 'A web application that uses a REST API to provide a search engine for movies, games, series etc.',
      Link: 'https://github.com/manosmin/movie-picker-app',
      Date: '2024/02',
      Team: 'No'
    }

    const ProjectInfo3 = {
      Title: 'manosmin.github.io',
      Used: ['React.js', 'Tailwind CSS'],
      Description: 'A fully responsive web page used as a personal portfolio, in order to showcase my education, experience, projects etc.',
      Link: 'https://github.com/manosmin/manosmin.github.io',
      Date: '2024/07',
      Team: 'No'
    }

    const ProjectInfo4 = {
      Title: 'Decentralized Systems Implementation', 
      Used: ['Python'],
      Description: 'Implementation of a decentralized index based on distributed hashing tables (Chord and Pastry DHTs) and its experimental evaluation in lookup operations, using real data sets scraped from the web.',
      Link: 'https://github.com/el-maestro78/Decentralized-Systems-Technologies', 
      Date: '2023/12',
      Team: 'Yes'
    }

    const ProjectInfo5 = {
      Title: 'Multidimensional Data Structures Implementation', 
      Used: ['Python'],
      Description: 'Implementation of several multidimensional data structures (K-D, Range, Quad and R trees) and their experimental evaluation with locality-sensitive hashing method in inserting, deleting, updating and searching operations, using real data sets scraped from the web.',
      Link: 'https://github.com/el-maestro78/Decentralized-Systems-Technologies', 
      Date: '2023/09',
      Team: 'Yes'
    }


    const ProjectInfo7 = {
      Title: 'Publishing House Database Management System', 
      Used: ['MySQL'],
      Description: 'Design and implementation of a database system to efficiently manage the operations of a publishing house. It enables the publishing house to handle authors, books, sales, inventory, and other related aspects of the business effectively.',
      Link: 'https://github.com/manosmin/ceid-dblab', 
      Date: '2020/02',
      Team: 'No'
    }

    const ProjectInfo8 = {
      Title: 'Smart Tasks Programming', 
      Used: ['Assembly', 'C++', 'Microchip Studio'],
      Description: 'Programming of an 8-bit AVR microcontroller to operate various smart tasks as highway intersection traffic lights, household appliance moving in empty spaces and house alarm system.',
      Link: 'https://github.com/manosmin/ceid-advanced-microprocessors', 
      Date: '2021/05',
      Team: 'Yes'
    }

    const Projects = [ProjectInfo3, ProjectInfo2, ProjectInfo1, ProjectInfo4, ProjectInfo5, ProjectInfo8, ProjectInfo7]

  return (
    <div id="projects" className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 py-48'>
      <div className="flex justify-between cursor-pointer">
        <h2 ref={containerRef1} className={`${isVisible1 && 'animate-slide-in-left'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><MdComputer className='mr-2'/> Projects</p>
        </h2>
      </div>
      <div className='mt-8 cursor-normal space-y-4'>
        {Projects.sort((a, b) => b.Date.localeCompare(a.Date)).map((item, index) => ( <ProjectItem myInfo={item} index={index + 1} key={item.Title} /> ))}
      </div>
    </div>
  )
}

export default Projects