import React from 'react'
import { FaGrinStars, FaGithub, FaLinkedinIn, FaDiscord, FaInfoCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoClose, IoDocument } from "react-icons/io5";
import { FaGear, FaEnvelope, FaBookOpen } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";


function Drawer({ toggleDropdown, isOpen }) {
  return (
    <div id="drawer-navigation" className={`opacity-0 ${isOpen ? 'md:animate-slide-in2 animate-fade-in-down2': 'md:animate-slide-out animate-fade-out-down'} fixed top-0 right-0 z-50 h-screen shadow p-4 bg-gray-100 md:w-64 w-screen dark:bg-gray-900`} aria-labelledby="drawer-navigation-label" style={{ "--delay": 0 + "s" }}>
      <div className="flex flex-col lg:justify-between h-full">
        <div>
          <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Contents</h5>
          <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 rounded-full bg-transparent hover:bg-gray-50 w-8 h-8 absolute top-3 right-3 inline-flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-gray-100" onClick={toggleDropdown}>
            <IoClose size={20} />
          </button>
          <div className="py-2 font-medium overflow-y-auto">
            <ul className="space-y-1" onClick={toggleDropdown}>
              <li>
                <a href="#about" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <FaInfoCircle />
                  </div>
                  <span className="ms-3">About Me</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <RiComputerFill />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                </a>
              </li>
              <li>
                <a href="#education" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <FaBookOpen />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Education</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <FaGear />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
                </a>
              </li>
              <li>
                <a href="#facts" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <FaGrinStars />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Fun Facts</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                    <FaEnvelope />
                  </div>
                  <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='font-medium'>
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Find me</h5>
          <ul className="py-2 overflow-y-auto space-y-1">
            <li>
              <a rel="noopener noreferrer" href="https://github.com/manosmin" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="github">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                  <FaGithub />
                </div>
                <span className="ms-3">GitHub</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://linkedin.com/in/manosmin" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="linkedin">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                  <FaLinkedinIn />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">LinkedIn</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="discord">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                  <FaDiscord />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Discord</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcVK4G_e28UQDwI2oQ?e=e7nrZb" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="CV">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                  <IoDocument />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">CV</span>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="mailto:manosmin@hotmail.com" className="flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 group" target="_blank" alt="e-mail">
                <div className='icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2'>
                  <MdAlternateEmail />
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Drawer;
