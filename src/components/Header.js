import React, { useState } from 'react';
import Drawer from './Drawer';
import { IoMoon, IoSunny, IoMenu } from "react-icons/io5";

const Header = ({ dark, darkModeHandler }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleDropdown = () => {
    setHasInteracted(true);
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="z-40 sticky top-0 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 shadow p-3">
      <div className="2xl:max-w-screen-xl md:max-w-screen-lg mx-auto w-full flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold">
          <a href="/#" className='inline-block animate-slide-in-left opacity-0' style={{ "--delay": 0.2 + "s" }}>Manos Minadakis </a>
          <small className="ml-2 hidden md:inline-block animate-slide-in opacity-0 font-semibold text-gray-500 dark:text-gray-400" style={{ "--delay": 0.2 + "s" }}>Software Developer</small>
        </div>
        <div>
          <ul className="flex list-none">
            <div className='flex animate-drop-in opacity-0' style={{ "--delay": 0.8 + "s" }}>
              <li className="flex cursor-pointer icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2 mx-1" alt="darkmode"
              onClick={darkModeHandler}>
                  { !dark && <IoMoon size={20}/> }
                  { dark && <IoSunny size={20}/> }
              </li>
              <li className="flex cursor-pointer icon-container bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 rounded-full p-2 mx-1" alt='dropdown' onClick={toggleDropdown}>
                <IoMenu size={20} />
              </li>
            </div>
          </ul>
        </div>
      </div>
      { hasInteracted && <Drawer toggleDropdown={toggleDropdown} isOpen={dropdownOpen} /> }
    </header>
  );
};

export default Header;
