import React from "react";
import { useIsVisible } from '../App';
import { PiCertificateFill } from "react-icons/pi";
import CertificateItem from "./CertificateItem";

const Certificates = () => {
  const [containerRef1, isVisible1] = useIsVisible({});

  const Certificate1 = {
    Title: 'FSO Core (p. 0-7)',
    Used: ['React', 'Node.js', 'Express.js', 'Redux.js', 'MongoDB', 'TanStack Query', 'Cypress', 'Vitest', 'React Router', 'React Hooks'],
    Description: 'A comprehensive open course covering modern web development practices. Learn to build, test and deploy full-stack web applications. ',
    Image: 'https://camo.githubusercontent.com/5a7ea33d54766c6ac758fd9b8268557b943dc03937f53ed821eb750c80288d04/68747470733a2f2f7777772e68656c73696e6b692e66692f6173736574732f64727570616c2f7374796c65732f31365f31305f786c2f73332f6d656469612d696d6167652f66756c6c737461636b5f737461636b5f3138343278313038302e706e672e776562703f69746f6b3d7944446445504456',
    Date: '2025/02',
    Link: 'https://github.com/manosmin/fullstackopen'
  }

  const Certificate2 = {
    Title: 'FSO TypeScript (p. 9)',
    Used: ['TypeScript', 'Zod', 'React', 'Express.js', 'React Router'],
    Description: 'An extension of the FSO Core course, focusing on frontend and backend development using TypeScript, ensuring type safety and scalability.',
    Image: 'https://camo.githubusercontent.com/5a7ea33d54766c6ac758fd9b8268557b943dc03937f53ed821eb750c80288d04/68747470733a2f2f7777772e68656c73696e6b692e66692f6173736574732f64727570616c2f7374796c65732f31365f31305f786c2f73332f6d656469612d696d6167652f66756c6c737461636b5f737461636b5f3138343278313038302e706e672e776562703f69746f6b3d7944446445504456',
    Date: '2025/03',
    Link: 'https://github.com/manosmin/fullstackopen/tree/master/part9'
  }

  const Certificates = [Certificate1, Certificate2];


  return (
    <div id="certificates" className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24">
      <div className="flex justify-between">
        <h2
          ref={containerRef1}
          className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`}
          style={{ '--delay': 0.2 + 's' }}
        >
          <p className="flex justify-center items-center">
            <PiCertificateFill className="mr-2" /> Certificates
          </p>
        </h2>
      </div>
      <p className={`${isVisible1 && 'animate-fade-in'} opacity-0 mt-8`} style={{ '--delay': 0.4 + 's' }}>These are the certificates that I've completed.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-hidden md:overflow-x-visible">
        {Certificates.sort((a, b) => b.Date.localeCompare(a.Date)).map((item, index) => (
          <CertificateItem myInfo={item} index={index + 1} key={item.Title} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
