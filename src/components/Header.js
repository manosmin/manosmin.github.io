import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5">
    <h2 class="text-4xl font-bold dark:text-white">Manos Minadakis<small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">Computer Engineer</small></h2>
    <nav>
        <ul className="flex space-x-4 mt-3 list-none">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
