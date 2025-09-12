import React from 'react';

const Footer = () => {

  return (
    <footer className="mt-auto bg-primary text-primary p-5 ">
      <div className='2xl:max-w-screen-xl md:max-w-screen-lg mx-auto w-full flex justify-end text-sm'>
        <p className='inline'> &copy; {new Date().getFullYear() } Manos Minadakis</p>
      </div>
    </footer>
  );
};

export default Footer;
