import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-900 text-white p-5">
    <h2 class="text-4xl font-bold dark:text-gray-100">Manos Minadakis<small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">Computer Engineer</small></h2>
    <nav>
        <ul className="flex text-gray-100 mt-3 list-none">
          <li><a rel="noopener noreferrer" href="https://www.github.com/manosmin" target="_blank"><FaGithub size={25}/></a></li>
          <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/manosmin" target="_blank"
      ><FaLinkedin size={25}/></a></li>
        <li><a rel="noopener noreferrer" href="https://www.discordapp.com/users/270397164209963009" target="_blank"><FaDiscord size={25}/></a></li>
          <li><a rel="noopener noreferrer" href="https://1drv.ms/b/s!AvPPFklWx5YlgcE97gVFyWQmI8Caww?e=hDOobR" target="_blank"><FaFilePdf size={25}/></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
