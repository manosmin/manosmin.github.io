import React from 'react';

const Footer = () => {

  return (
    <footer className="mt-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-5 ">
      <div className='max-w-screen-xl mx-auto w-full flex justify-between'>
        <p className='inline'>I built this web page using <a rel="noopener noreferrer" href="https://www.react.dev/" target="_blank"
        className="hover:underline">React.js</a> and <a rel="noopener noreferrer" href="https://tailwindcss.com/" target="_blank"
        className="hover:underline">Tailwind CSS.</a></p>
        <p className='inline'> &copy; 2024 Manos Minadakis</p>
      </div>
    </footer>
  );
};

export default Footer;
