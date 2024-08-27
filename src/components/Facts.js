import React from 'react';
import { FaGrinStars } from "react-icons/fa";
import { useIsVisible } from '../App';

function Facts() {


  const [ containerRef1, isVisible1] = useIsVisible({})

  const [ containerRef2, isVisible2] = useIsVisible({})

  const [ containerRef3, isVisible3] = useIsVisible({})

  const [ containerRef4, isVisible4] = useIsVisible({})


  return (
    <div id="facts" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10  py-24'>
      <div  className="flex justify-between rounded-lg shadow p-6">
        <h2 ref={containerRef1} className={`text-2xl font-semibold opacity-0 ${isVisible1 && "animate-drop-in"}`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><FaGrinStars className='mr-2'/> Fun Facts</p>
        </h2>
      </div>
      <ul className="mt-4 cursor-normal list-inside list-disc space-y-2 rounded-lg shadow p-6">
          <li ref={containerRef2} className={`opacity-0 ${isVisible2 && "animate-slide-in"}`} style={{ "--delay": 0.4 + "s" }}>I've obtained a flight dispatchers' diploma and worked in the control tower of a small airport on a border island, as part of my military service.</li>
          <li ref={containerRef3} className={`opacity-0 ${isVisible3 && "animate-slide-in-left"}`} style={{ "--delay": 0.4 + "s" }}>In the past, I used to play online poker at small stakes and had won several tournaments with thousands participants each.</li>
          <li ref={containerRef4} className={`opacity-0 ${isVisible4 && "animate-slide-in"}`} style={{ "--delay":  0.4 + "s" }}>In my early teenage years, I played for a local basketball team and participated in the juniors' local championship. </li>
      </ul>
    </div>
  )
}

export default Facts