import React from 'react';
import { useIsVisible } from '../App';
import { FiExternalLink } from "react-icons/fi";


function ProjectItem(props) {

  const [ containerRef1, isVisible1] = useIsVisible({})

  return (
    <ul ref={containerRef1} className={`${isVisible1 && (props.index % 2 !== 0 ? 'animate-slide-in' : 'animate-slide-in-left')} opacity-0 mt-4 list-none`} style={{ "--delay":  0.4 + "s" }}>
      {console.log(props.index)}
        <li>{props.myInfo.Icon}&nbsp;<FiExternalLink className='inline'/>&nbsp;
        <a rel="noopener noreferrer"
        target="_blank"
        href={props.myInfo.Link}
        className="font-semibold hover:underline">{props.myInfo.Title}</a></li>
        <li >{props.myInfo.Date}</li>
        <li className=''>{props.myInfo.Description}</li>
        <li className='italic'>Used {props.myInfo.Used}</li>
    </ul>
  )
}

export default ProjectItem