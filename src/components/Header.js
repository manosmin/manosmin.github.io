import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaDiscord } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMoon, IoSunny } from "react-icons/io5";


const Header = () => {

  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
  }

  return (
    <header className="sticky top-0 bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-5 mb-4">
    <h2 class="text-4xl font-bold">Manos Minadakis <small class="inline-block font-semibold text-gray-400 dark:text-gray-600">Computer Engineer</small></h2>
    <nav>
        <ul className="flex mt-3 list-none">
          <li>
            <a rel="noopener noreferrer" href="https://www.github.com/manosmin" alt="github" target="_blank"><FaGithub size={25}/></a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/manosmin" target="_blank" alt="linkedin"><FaLinkedin size={25}/></a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" target="_blank" alt="discord"><FaDiscord size={25}/></a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcE97gVFyWQmI8Caww?e=hDOobR" target="_blank" alt="CV"><FaFilePdf size={25}/></a>
          </li>
          <li>
            <a href="mailto:manosmin@hotmail.com" alt="email"><MdAlternateEmail size={25}/></a>
          </li>
          <li>
              <button onClick={()=> darkModeHandler()}>
                { !dark && <IoSunny size={25}/> }
                { dark && <IoMoon size={25}/> }
              </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
