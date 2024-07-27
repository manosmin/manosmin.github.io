import React, { useState } from 'react';
import { FaRegGrinStars } from "react-icons/fa";


function Facts() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

  return (
    <section id="facts" className="bg-gray-900 text-gray-200 p-10">
        <button
        onClick={toggleAccordion}
        className="text-gray-200 text-2xl font-semibold mb-4"
      >
        <FaRegGrinStars className='inline'/> Fun Facts
      </button>
      {isOpen && (
        <ul class="list-inside list-disc">
            <li>I was trained to be a flight dispatcher and worked in the control tower of a small military airport on a border island, as part of my military service. 👨🏻‍✈️✈️</li>
            <li>I used to play online poker and have won several tournaments at small stakes, the largest of which had 3600 participants! 💸🤑💰</li>
            <li>In my teenage years, I was a member of a local basketball team as a shooting guard and had also participated in the juniors' local championship for a few matches. ( っ'-')╮ =͟͟͞͞🏀 </li>
        </ul>
        )}
    </section>
  )
}

export default Facts