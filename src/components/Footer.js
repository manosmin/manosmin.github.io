import React from 'react';

const Footer = () => {

  return (
    <footer className="mt-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-5 ">
      <div className='2xl:max-w-screen-xl md:max-w-screen-lg mx-auto w-full flex justify-between'>
        <p className='inline'>I built this web page using <a rel="noopener noreferrer" href="https://www.react.dev/" target="_blank"
        >React.js</a></p>
        <p className='inline'> &copy; 2024 Manos Minadakis</p>
      </div>
    </footer>
  );
};

export default Footer;
