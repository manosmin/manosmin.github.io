import React from 'react'
import { useIsVisible } from '../App';

function SkillItem(props) {


  const [ containerRef1, isVisible1] = useIsVisible({})

  return (<div ref={containerRef1} className={`${isVisible1 && ((props.index % 2 === 0) ? 'animate-slide-in md:animate-fade-in' : 'animate-slide-in-left md:animate-fade-in')} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
    <div className="font-medium">{props.myItem.Icon} {props.myItem.Title}</div>
    <div className="w-full h-4 mb-8 md:mb-4 bg-gray-300 rounded-full dark:bg-gray-700">
        <div className="h-4 bg-gray-900 rounded-full dark:bg-gray-100" style={{width: props.myItem.Percentage}}>
    </div>
    </div>
    </div>
  )
}

export default SkillItem