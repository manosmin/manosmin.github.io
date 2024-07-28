import React from 'react'

function SkillItem(props) {
  return (<>
    <div class="mt-10 mb-1 font-medium">{props.myItem.Icon} {props.myItem.Title}</div>
    <div class="w-full h-4 mb-8 bg-gray-800 rounded-full dark:bg-gray-300">
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-900" style={{width: props.myItem.Percentage}}>
    </div>
    </div>
    </>
  )
}

export default SkillItem