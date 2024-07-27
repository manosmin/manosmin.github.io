import React, { useState } from 'react';

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
        <h2 className="text-2xl font-semibold">Fun Facts</h2>
      </button>
      {isOpen && (
        <ul class="list-disc">
            <li>I was trained to be a flight dispatcher and worked in the control tower of a small military airport on a border island, as part of my military service. 👨🏻‍✈️✈️</li>
            <li>I used to play online poker and have won several tournaments at small stakes, the largest of which had 3600 participants! 💸🤑💰</li>
            <li>In my teenage years, I was part of a local basketball team as a shooting guard and had also participated in the juniors' local championship for a few matches. ( っ'-')╮ =͟͟͞͞🏀 </li>
        </ul>
        )}
    </section>
  )
}

export default Facts