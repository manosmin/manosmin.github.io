import { React, useState } from 'react';
import SkillItem from './SkillItem';
import { GoGear } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaGitAlt  } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiMongodb, SiGnubash   } from "react-icons/si";




function Skills() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="skills" onClick={toggleAccordion} className="cursor-pointer">
        <h2 className="animate-slide-in opacity-0 text-2xl font-semibold" style={{ "--delay": 0.6 + "s" }}>
          <GoGear className='inline'/> Skills
        </h2>
      </div>
      {isOpen && ( <div className='mt-8 cursor-normal'>
        <SkillItem myItem = {{Title: 'JavaScript', Percentage: '90%', Icon: <IoLogoJavascript className='mb-2 inline' size={25} />, i: 1}}/>
        <SkillItem myItem = {{Title: 'HTML', Percentage: '70%', Icon: <FaHtml5 className='mb-2 inline' size={25} />, i: 2}}/>
        <SkillItem myItem = {{Title: 'CSS', Percentage: '70%', Icon: <FaCss3Alt className='mb-2 inline' size={25} />, i: 3}}/>
        <SkillItem myItem = {{Title: 'MongoDB', Percentage: '70%', Icon: <SiMongodb className='mb-2 inline' size={25} />, i: 4}}/>
        <SkillItem myItem = {{Title: 'SQL', Percentage: '90%', Icon: <FaDatabase className='mb-2 inline' size={25} />, i: 5}}/>
        <SkillItem myItem = {{Title: 'Python', Percentage: '90%', Icon: <FaPython className='mb-2 inline' size={25} />, i: 6}}/>
        <SkillItem myItem = {{Title: 'C++', Percentage: '60%', Icon: <SiCplusplus className='mb-2 inline' size={25} />, i: 7}}/>
        <SkillItem myItem = {{Title: 'Java', Percentage: '50%', Icon: <FaJava className='mb-2 inline' size={25} />, i: 8}}/>
        <SkillItem myItem = {{Title: 'Kotlin', Percentage: '50%', Icon: <SiKotlin className='mb-2 inline' size={25} />, i: 9}}/>
        <SkillItem myItem = {{Title: 'Git', Percentage: '80%', Icon: <FaGitAlt className='mb-2 inline' size={25} />, i: 10}}/>
        <SkillItem myItem = {{Title: 'Bash', Percentage: '50%', Icon: <SiGnubash className='mb-2 inline' size={25} />, i: 11}}/>
        </div>)}
    </div>
  )
}

export default Skills