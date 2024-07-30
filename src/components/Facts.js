import React, { useState } from 'react';
import { FaRegGrinStars } from "react-icons/fa";


function Facts() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
    <div id="facts" onClick={toggleAccordion} className="cursor-pointer">
      <h2 className="animate-slide-in opacity-0 text-2xl font-semibold" style={{ "--delay": 1 + "s" }}>
        <FaRegGrinStars className='inline'/> Fun Facts
      </h2>
    </div>
      {isOpen && (
        <ul class="mt-8 cursor-normal list-inside list-disc space-y-2">
            <li className='animate-slide-in opacity-0' style={{ "--delay": 0.2 + "s" }}>I've obtained a flight dispatchers' diploma and worked in the control tower of a small airport on a border island, as part of my military service. 👨🏻‍✈️✈️</li>
            <li className='animate-slide-in-left opacity-0' style={{ "--delay": 0.6 + "s" }}>In the past, I used to play online poker and had won several tournaments at small stakes, the largest of which had 3600 participants. 🃏🏆</li>
            <li className='animate-slide-in opacity-0' style={{ "--delay":  1 + "s" }}>In my teenage years, I played for a local basketball team and participated in the juniors' local championship. ( っ'-')╮ =͟͟͞͞🏀 </li>
        </ul>
        )}
    </div>
  )
}

export default Facts