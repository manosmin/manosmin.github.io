import React from 'react';
import { useIsVisible } from '../App';
import { FiLink } from "react-icons/fi";
import { BsFillPeopleFill, BsPersonFill  } from "react-icons/bs";


function ProjectItem(props) {

  const [ containerRef1, isVisible1] = useIsVisible({})

  return (
    <ul ref={containerRef1} className={`${isVisible1 && (props.index % 2 !== 0 ? 'animate-slide-in' : 'animate-slide-in-left')} opacity-0 mt-4 list-none`} style={{ "--delay":  0.4 + "s" }}>
        <li className='inline'>{props.myInfo.Icon}<FiLink className='inline'/>&nbsp;</li>
        <li className='inline'>{props.myInfo.Team === 'Yes' ? <BsFillPeopleFill className='inline'/> : <BsPersonFill className='inline'/>}</li>
        <li><a rel="noopener noreferrer"
        target="_blank"
        href={props.myInfo.Link}
        className="font-semibold hover:underline">{props.myInfo.Title}</a></li>
        <li >{props.myInfo.Date}</li>
        <li>{props.myInfo.Description}</li>
        <ul className='mt-2 flex flex-wrap gap-2'>
          {(props.myInfo.Used).map((item, index) => (<li key={index} className='text-sm border-2 border-gray-900 rounded-full bg-gray-900 text-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:text-gray-900 px-3'>{item}</li>))}
        </ul>
    </ul>
  )
}

export default ProjectItem