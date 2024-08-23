import React from 'react'
import { FiBookOpen, FiInfo} from "react-icons/fi";
import { FaRegGrinStars, FaRegEnvelope } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { IoClose } from "react-icons/io5";


function Drawer({ toggleDropdown, isOpen }) {
    
  return (
<div id="drawer-navigation" class={`opacity-0 ${isOpen ? 'md:animate-slide-in animate-fade-in-down': 'md:animate-slide-out animate-fade-out-down'} fixed top-0 right-0 z-50 h-screen p-4 bg-gray-200 md:w-72 w-1/2 w-screen dark:bg-gray-800`}aria-labelledby="drawer-navigation-label" style={{ "--delay": 0 + "s" }}>
        <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Contents</h5>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-transparent hover:bg-gray-100  rounded-lg text-sm w-8 h-8 absolute top-3.5 end-3.5 2 inline-flex items-center justify-center dark:hover:bg-gray-700 dark:hover:text-white" onClick={toggleDropdown}>
        <IoClose/>
        </button>
        <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium" onClick={toggleDropdown}>
                <li>
                    <a href="#about" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FiInfo />
                    <span class="ms-3">About Me</span>
                    </a>
                </li>
                <li>
                    <a href="#education" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FiBookOpen/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Education</span>
                    </a>
                </li>
                <li>
                    <a href="#projects" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <MdComputer/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#skills" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <GoGear/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Skills</span>
                    </a>
                </li>
                <li>
                    <a href="#facts" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaRegGrinStars/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Fun Facts</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaRegEnvelope/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Contact</span>
                    </a>
                </li>
            </ul>
        </div>
</div>
  )
}

export default Drawer