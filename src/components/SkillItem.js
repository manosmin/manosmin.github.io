import React from 'react'

function SkillItem(props) {
  return (<div className={`${props.index % 2 !== 0 ? 'animate-slide-in' : 'animate-slide-in-left'} opacity-0`} style={{ "--delay": 0.2 + (props.index-1) * 0.4 + "s" }}>
    <div className="mt-10 mb-1 font-medium">{props.myItem.Icon} {props.myItem.Title}</div>
    <div className="w-full h-4 mb-8 bg-gray-800 rounded-full dark:bg-gray-300">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-900" style={{width: props.myItem.Percentage}}>
    </div>
    </div>
    </div>
  )
}

export default SkillItem