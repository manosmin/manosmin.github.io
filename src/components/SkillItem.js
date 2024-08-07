import React, { useRef } from 'react'
import { useIsVisible } from '../App';

function SkillItem(props) {


  const [ containerRef1, isVisible1] = useIsVisible({})

  return (<div ref={containerRef1} className={`${isVisible1 && ((props.index % 2 !== 0) ? 'animate-slide-in' : 'animate-slide-in-left')} opacity-0`} style={{ "--delay": 0.4 + "s" }}>
    <div className="mt-8 mb-1 font-medium">{props.myItem.Icon} {props.myItem.Title}</div>
    <div className="w-full h-4 mb-8 bg-gray-300 rounded-full dark:bg-gray-800">
        <div className="h-4 bg-gray-900 rounded-full dark:bg-gray-200" style={{width: props.myItem.Percentage}}>
    </div>
    </div>
    </div>
  )
}

export default SkillItem