import React from 'react'

function Education() {
  return (
    <section id="education" className="bg-gray-800 text-white p-10">
      <h2 className=" mb-4 text-2xl font-semibold">Education</h2>
      <a rel="noopener noreferrer" href="https://www.ceid.upatras.gr" target='_blank' className="font-semibold hover:underline">Computer Engineering and Informatics Department, University of Patras</a><p>2014 - 2024</p>
      <p className="inline font-medium">Grade: </p> <p className="inline">6.57/10.0 (Lower Second Class Honours)</p><br/>
      <p className="inline font-medium">Thesis: </p> <a rel="noopener noreferrer" target="_blank" href="https://nemertes.library.upatras.gr/items/b24439d5-3bd7-4de0-b9f6-8f67c0ddf3aa"className="hover:underline inline">"Process mining on cyber-physical systems: Liqueur Plant case study" </a><p className="italic inline">(Integration of a data-driven methodology named "process mining" on a liqueur production system in order to reveal, analyze and find ways to improve the production process)</p>
    </section>
  )
}

export default Education