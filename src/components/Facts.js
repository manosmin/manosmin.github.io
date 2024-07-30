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
      <h2 className="text-2xl font-semibold">
        <FaRegGrinStars className='inline'/> Fun Facts
      </h2>
    </div>
      {isOpen && (
        <ul class="mt-8 cursor-normal list-inside list-disc space-y-2">
            <li>I was trained as a flight dispatcher and worked in the control tower of a small airport on a border island, during my military service. 👨🏻‍✈️✈️</li>
            <li>I used to play online poker and have won several tournaments at small stakes, the largest of which had 3600 participants. 🃏🏆</li>
            <li>In my teenage years, I played for a local basketball team and participated in the juniors' local championship. ( っ'-')╮ =͟͟͞͞🏀 </li>
        </ul>
        )}
    </div>
  )
}

export default Facts