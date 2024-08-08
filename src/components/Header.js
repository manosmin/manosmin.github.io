import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaDiscord, FaPhone } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMoon, IoSunny } from "react-icons/io5";


const Header = () => {

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  return (
    <header className="z-40 sticky top-0 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-5">
      <h2 className="text-4xl font-bold">
        <p className='inline-block animate-slide-in-left opacity-0' style={{ "--delay": 0.2 + "s" }}>Manos Minadakis</p>
        &nbsp;
        <small className="inline-block animate-slide-in opacity-0 font-semibold text-gray-600 dark:text-gray-400" style={{ "--delay": 0.2 + "s" }}>Computer Engineer</small>
      </h2>
      <nav>
        <ul className="flex justify-between mt-3 list-none">
          <div className='flex animate-drop-in opacity-0' style={{ "--delay": 0.8 + "s" }}>
            <li className="icon-container bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.github.com/manosmin" alt="github" target="_blank"><FaGithub size={25}/></a>
            </li>
            <li className="icon-container bg-blue-600 text-white rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/manosmin" target="_blank" alt="linkedin"><FaLinkedin size={25}/></a>
            </li>
            <li className="icon-container bg-purple-600 text-white rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" target="_blank" alt="discord"><FaDiscord size={25}/></a>
            </li>
            <li className="icon-container bg-red-600 text-white rounded-full p-2 mx-1">
              <a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcE97gVFyWQmI8Caww?e=hDOobR" target="_blank" alt="CV"><FaFilePdf size={25}/></a>
            </li>
            <li className="icon-container bg-yellow-500 text-white rounded-full p-2 mx-1">
              <a href="mailto:manosmin@hotmail.com" alt="email"><MdAlternateEmail size={25}/></a>
            </li>
            <li className="icon-container bg-green-500 text-white rounded-full p-2 mx-1">
              <a href="tel:+306947651098" alt="mobile"><FaPhone size={25}/></a>
            </li>
          </div>
          <li className="flex animate-drop-in opacity-0 icon-container bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-900 rounded-full p-2 mx-1" style={{ "--delay": 0.8 + "s" }}>
            <button onClick={()=> darkModeHandler()}>
              { !dark && <IoMoon size={25}/> }
              { dark && <IoSunny size={25}/> }
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
