import React from 'react';
import { IoMoon, IoSunny } from "react-icons/io5";

const Footer = () => {

  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }


  return (
    <footer className="mt-auto flex justify-between bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-5 ">
      <p className='inline'>I built this web page using <a rel="noopener noreferrer" href="https://www.react.dev/" target="_blank"
      className="hover:underline">React.js</a> and <a rel="noopener noreferrer" href="https://tailwindcss.com/" target="_blank"
      className="hover:underline">Tailwind CSS</a> &copy; Manos Minadakis 2024</p>
      <button className="inline" onClick={()=> darkModeHandler()}>
        { dark && <IoSunny size={25}/> }
        { !dark && <IoMoon size={25}/> }
      </button>
    </footer>
  );
};

export default Footer;
