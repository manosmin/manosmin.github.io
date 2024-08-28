import React from 'react';
import { useIsVisible } from '../App';
import ProjectItem from './ProjectItem';
import { RiComputerFill } from "react-icons/ri";

function Projects() {
  const [containerRef1, isVisible1] = useIsVisible({});

  // Project Info
  const ProjectInfo1 = {
    Title: 'Virus Contact Tracing Website',
    Used: ['Node.js', 'Express.js', 'Passport.js', 'Leaflet.js', 'Chart.js', 'JavaScript', 'HTML', 'Bootstrap 4', 'MongoDB'],
    Description: 'Website that helps users track and manage their potential exposure to virus carriers by crowd-sourcing data about their visits to various places in Patras, Greece.',
    Link: 'https://github.com/manosmin/ceid-web',
    Date: '2022/05',
    Team: 'Yes',
    Image: 'https://github.com/manosmin/ceid-web/raw/master/screenshots/ss2.png'
  };
  const ProjectInfo2 = {
    Title: 'Movie Picker',
    Used: ['React.js', 'Bootstrap 5'],
    Description: 'Web application that uses data from a REST API to provide a search engine for movies, games, series etc.',
    Link: 'https://github.com/manosmin/movie-picker-app',
    Date: '2024/02',
    Team: 'No',
    Image: 'https://github.com/manosmin/movie-picker-app/blob/master/screenshots/desktop.png?raw=true',
    LiveDemoLink: 'https://manosmin.github.io/movie-picker-app/'
  };
  const ProjectInfo3 = {
    Title: 'Personal Web Page',
    Used: ['React.js', 'Tailwind CSS', 'Three.js'],
    Description: 'Animated and responsive web app used as a personal portfolio, in order to showcase projects, experience, studies etc.',
    Link: 'https://github.com/manosmin/manosmin.github.io',
    Date: '2024/07',
    Team: 'No',
    Image: 'https://imgur.com/HJA1ttv.png',
    LiveDemoLink: 'https://manosm.in'
  };
  const ProjectInfo4 = {
    Title: 'Python Implementation of a Decentralized System',
    Used: ['Python'],
    Description: 'Implementation of a decentralized index based on distributed hashing tables (Chord and Pastry DHTs) and its experimental evaluation in lookup operations, using real data sets scraped from the web.',
    Link: 'https://github.com/el-maestro78/Decentralized-Systems-Technologies',
    Date: '2023/12',
    Team: 'Yes',
    Image: 'https://github.com/el-maestro78/Decentralized-Systems-Technologies/raw/main/screenshots/Figure_1.png'
  };
  const ProjectInfo5 = {
    Title: 'Python Implementation of Multidimensional Data Structures ',
    Used: ['Python'],
    Description: 'Implementation of several multidimensional data structures (R, Range, K-D, and Quad Trees) and their experimental evaluation with locality-sensitive hashing method in inserting, deleting, updating and searching operations, using real data sets scraped from the web.',
    Link: 'https://github.com/nikpapage23/Multi-Dimensional-Data-Structures-Project',
    Date: '2023/09',
    Team: 'Yes',
    Image: 'https://github.com/nikpapage23/Multi-Dimensional-Data-Structures-Project/raw/main/Multi-Dimensional_Data_Structures_PROJECT/screenshots/Figure_2.png'
  };
  // eslint-disable-next-line
  const ProjectInfo6 = {
    Title: 'Publishing House Database Management System',
    Used: ['MySQL'],
    Description: 'Design and implementation of a database system to efficiently manage the operations of a publishing house. It enables the publishing house to handle authors, books, sales, inventory etc.',
    Link: 'https://github.com/manosmin/ceid-dblab',
    Date: '2020/02',
    Team: 'No',
    Image: 'https://github.com/manosmin/ceid-dblab/raw/master/screenshots/er.png'
  };
  // eslint-disable-next-line
  const ProjectInfo7 = {
    Title: 'Smart Tasks Programming',
    Used: ['x86', 'Embedded C', 'Microchip Studio'],
    Description: 'Programming of an 8-bit AVR microcontroller to operate various smart tasks as highway intersection traffic lights, household appliance moving in empty spaces and house alarm system.',
    Link: 'https://github.com/manosmin/ceid-advanced-microprocessors',
    Date: '2021/05',
    Team: 'Yes',
    Image: 'https://www.dice.com/binaries/medium/content/gallery/dice/insights/2020/08/shutterstock_595866521.jpg'
  };
  const ProjectInfo8 = {
    Title: 'Card Price Tracker',
    Used: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js', 'Tailwind CSS'],
    Description: 'Website that discovers and shows the latest price spikes in a digital collectible card game. It utilizes bulk data fetched on a daily basis, processes them into a database and provides a REST API, helping users to make data-driven decisions on investing in the actual card market.',
    Link: 'https://github.com/manosmin/cardflipmarket',
    LiveDemoLink: 'https://cardflipmarket-manosmin.onrender.com/',
    Date: '2024/08',
    Team: 'No',
    Image: 'https://github.com/manosmin/cardflipmarket/raw/master/screenshots/ss0.png'
  };

  const Projects = [ProjectInfo1, ProjectInfo2, ProjectInfo3, ProjectInfo4, ProjectInfo5, ProjectInfo8];

  return (
    <div id="projects" className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24">
      <div className="flex justify-between">
        <h2
          ref={containerRef1}
          className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`}
          style={{ '--delay': 0.2 + 's' }}
        >
          <p className="flex justify-center items-center">
            <RiComputerFill className="mr-2" /> Projects
          </p>
        </h2>
      </div>
      <p className={`${isVisible1 && 'animate-fade-in'} opacity-0 mt-8`} style={{ '--delay': 0.4 + 's' }}>These are some of my personal projects, as well as some major assignments that Ι've completed during my studies in collaboration with my fellow students.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.sort((a, b) => b.Date.localeCompare(a.Date)).map((item, index) => (
          <ProjectItem myInfo={item} index={index + 1} key={item.Title} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
