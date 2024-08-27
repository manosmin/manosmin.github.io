import React from 'react';
import { useIsVisible } from '../App';
import { FiLink } from "react-icons/fi";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";

function ProjectItem(props) {
  const [containerRef1, isVisible1] = useIsVisible({});

  return (
    <div
      ref={containerRef1}
      className={`${
        isVisible1 && (props.index % 2 !== 0 ? 'animate-slide-in' : 'animate-slide-in-left')
      } opacity-0 space-y-2 md:p-6 p-2`}
      style={{ '--delay': 0.4 + 's' }}
    >
      <img
        src={props.myInfo.Image}
        alt={props.myInfo.Title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <div className="flex items-center space-x-2">
          {props.myInfo.Team === 'Yes' ? (
            <BsFillPeopleFill className="inline" />
          ) : (
            <BsPersonFill className="inline" />
          )}
          <FiLink className="inline" />
          <a rel="noopener noreferrer" target="_blank" className="hover:underline" href={props.myInfo.Link}>{props.myInfo.Title}</a>
        </div>

      </h3>
      <p>{props.myInfo.Date}</p>
      <p className='hover:underline'><a rel="noopener noreferrer" target="_blank" href={props.myInfo.LiveDemoLink}>{props.myInfo.LiveDemoLink}</a></p>
      <p>{props.myInfo.Description}</p>
      <ul className="flex flex-wrap gap-2">
        {props.myInfo.Used.map((item, index) => (
          <li
            key={index}
            className="text-sm font-medium border border-gray-900 rounded-full bg-gray-900 text-gray-100 dark:border-gray-100 dark:bg-gray-100 dark:text-gray-900 px-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
