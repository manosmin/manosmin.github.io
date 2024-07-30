import React from 'react';
import { FiExternalLink } from "react-icons/fi";


function ProjectItem(props) {
  return (
    <ul className='animate-slide-in opacity-0 mt-4 list-none' style={{ "--delay": props.myInfo.i * 0.2 + "s" }}>
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