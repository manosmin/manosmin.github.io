import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaDiscord, FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMoon, IoSunny, IoDocument, IoMenu } from "react-icons/io5";


const Header = () => {

  const [dark, setDark] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="z-40 sticky top-0 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-5">
      <h2 className="text-4xl font-bold">
        <a href="/#" className='inline-block animate-slide-in-left opacity-0' style={{ "--delay": 0.2 + "s" }}>Manos Minadakis</a>
        &nbsp;
        <small className="inline-block animate-slide-in opacity-0 font-semibold text-gray-600 dark:text-gray-400" style={{ "--delay": 0.2 + "s" }}>Computer Engineer</small>
      </h2>
      <nav>
        <ul className="flex justify-between mt-3 list-none">
          <div className='flex animate-drop-in opacity-0' style={{ "--delay": 0.8 + "s" }}>
            <li className="icon-container bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.github.com/manosmin" alt="github" target="_blank"><FaGithub size={20}/></a>
            </li>
            <li className="icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/manosmin" target="_blank" alt="linkedin"><FaLinkedinIn size={20}/></a>
            </li>
            <li className="icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" target="_blank" alt="discord"><FaDiscord size={20}/></a>
            </li>
            <li className="icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcE97gVFyWQmI8Caww?e=hDOobR" target="_blank" alt="CV"><IoDocument size={20}/></a>
            </li>
            <li className="icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <a href="mailto:manosmin@hotmail.com" alt="email"><MdAlternateEmail size={20}/></a>
            </li>
            <li className="icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <a href="tel:+306947651098" alt="mobile"><FaPhone size={20}/></a>
            </li>
          </div>
          <div className='flex animate-drop-in opacity-0' style={{ "--delay": 0.8 + "s" }}>
            <li className="flex icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1">
              <button onClick={()=> darkModeHandler()}>
                { !dark && <IoMoon size={20}/> }
                { dark && <IoSunny size={20}/> }
              </button>
            </li>
            <li className="flex cursor-pointer icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1" onClick={()=> toggleDropdown()}>
              <IoMenu size={20} />
              {dropdownOpen && (
                <ul className="absolute right-0 mt-10 text-gray-200 bg-gray-900 dark:bg-gray-200 dark:text-gray-900 shadow-lg rounded-lg z-50">
                  <li className="block font-medium px-4 py-2" ><a href="#about">About Me</a></li>
                  <li className="block font-medium px-4 py-2"><a href="#education">Education</a></li>
                  <li className="block font-medium px-4 py-2"><a href="#projects">Projects</a></li>
                  <li className="block font-medium px-4 py-2"><a href="#skills">Skills</a></li>
                  <li className="block font-medium px-4 py-2"><a href="#facts">Fun Facts</a></li>
                  <li className="block font-medium px-4 py-2"><a href="#contact">Contact</a></li>
                </ul>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
