import React, { useRef } from 'react';
import { FaRegGrinStars } from "react-icons/fa";
import { useIsVisible } from '../App';

function Facts() {


  const [ containerRef1, isVisible1] = useIsVisible({})

  const [ containerRef2, isVisible2] = useIsVisible({})

  const [ containerRef3, isVisible3] = useIsVisible({})

  const [ containerRef4, isVisible4] = useIsVisible({})


  return (
    <div className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 mb-10'>
      <div id="facts" className="flex justify-between cursor-pointer">
        <h2 ref={containerRef1} className={`text-2xl font-semibold opacity-0 ${isVisible1 && "animate-slide-in-left"}`} style={{ "--delay": 0.2 + "s" }}>
        <p className='flex justify-center items-center'><FaRegGrinStars className='mr-2'/> Fun Facts</p>
        </h2>
      </div>
      <ul class="mt-8 cursor-normal list-inside list-disc space-y-2">
          <li ref={containerRef2} className={`opacity-0 ${isVisible2 && "animate-slide-in"}`} style={{ "--delay": 0.4 + "s" }}>I've obtained a flight dispatchers' diploma and worked in the control tower of a small airport on a border island, as part of my military service. 👨🏻‍✈️✈️</li>
          <li ref={containerRef3} className={`opacity-0 ${isVisible3 && "animate-slide-in-left"}`} style={{ "--delay": 0.4 + "s" }}>In the past, I used to play online poker and had won several tournaments at small stakes, the largest of which had 3600 participants. 🃏🏆</li>
          <li ref={containerRef4} className={`opacity-0 ${isVisible4 && "animate-slide-in"}`} style={{ "--delay":  0.4 + "s" }}>In my teenage years, I played for a local basketball team and participated in the juniors' local championship. ( っ'-')╮ =͟͟͞͞🏀 </li>
      </ul>
    </div>
  )
}

export default Facts