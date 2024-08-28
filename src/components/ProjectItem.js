import React from 'react';
import { useIsVisible } from '../App';
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function ProjectItem(props) {
  const [containerRef1, isVisible1] = useIsVisible({});

  return (
    <div
      ref={containerRef1}
      className={`${
        isVisible1 && (props.index % 2 !== 0 ? 'animate-slide-in md:animate-slide-in ' : 'animate-slide-in-left md:animate-slide-in ')
      }  opacity-0 space-y-2 md:p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-900 p-6 hover:border-gray-800 dark:hover:border-gray-200`}
      style={{ '--delay': 0.4 + 's' }}
    >
      { props.myInfo.Image && <a rel="noopener noreferrer" target="_blank" className="cursor-pointer " href={props.myInfo.Link}><img
        src={props.myInfo.Image}
        alt={props.myInfo.Title}
        className="w-full h-24 lg:h-32 object-cover rounded-md mb-4 "
      /></a> }
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <div className="space-x-2">
          {props.myInfo.Team === 'Yes' ? (
            <BsFillPeopleFill className="inline" />
          ) : (
            <BsPersonFill className="inline" />
          )}
          <FaGithub className="inline" />
          <span>{props.myInfo.Title}</span>
        </div>

      </h3>
      <p className='font-medium hidden'>{props.myInfo.Date}</p>
      {props.myInfo.LiveDemoLink && <p className='font-medium hover:underline break-all text-blue-700 dark:text-blue-500'><a rel="noopener noreferrer" target="_blank" href={props.myInfo.LiveDemoLink}>Live Demo</a></p>}
      <p>{props.myInfo.Description}</p>
      <ul className="flex flex-wrap gap-2">
        {props.myInfo.Used.map((item, index) => (
          <li
            key={index}
            className="text-sm font-medium rounded-full bg-gray-900 text-gray-100 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 px-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
