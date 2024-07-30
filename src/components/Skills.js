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
        <h2 className="text-2xl font-semibold">
          <GoGear className='inline'/> Skills
        </h2>
      </div>
      {isOpen && ( <div className='mt-8 cursor-normal'>
        <SkillItem myItem = {{Title: 'JavaScript', Percentage: '90%', Icon: <IoLogoJavascript className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'HTML', Percentage: '75%', Icon: <FaHtml5 className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'CSS', Percentage: '75%', Icon: <FaCss3Alt className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'MongoDB', Percentage: '75%', Icon: <SiMongodb className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'SQL', Percentage: '90%', Icon: <FaDatabase className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'Python', Percentage: '90%', Icon: <FaPython className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'C++', Percentage: '60%', Icon: <SiCplusplus className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'Java', Percentage: '50%', Icon: <FaJava className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'Kotlin', Percentage: '50%', Icon: <SiKotlin className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'Git', Percentage: '80%', Icon: <FaGitAlt className='mb-2 inline' size={25} />}}/>
        <SkillItem myItem = {{Title: 'Bash', Percentage: '50%', Icon: <SiGnubash className='mb-2 inline' size={25} />}}/>
        </div>)}
    </div>
  )
}

export default Skills