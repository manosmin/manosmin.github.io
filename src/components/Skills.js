import { React, useState } from 'react';
import SkillItem from './SkillItem';
import { GoGear } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaGitAlt  } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiMongodb, SiGnubash, SiPhp } from "react-icons/si";
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";






function Skills() {
    const [isOpen, setIsOpen] = useState(false);
    const [isArrowDown, setIsArrowDown] = useState(true);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
      setIsArrowDown(!isArrowDown);
    };

    const Skill1 = {Title: 'JavaScript', Percentage: '90%', Icon: <IoLogoJavascript className='mb-2 inline' size={25} />}
    const Skill2 = {Title: 'HTML', Percentage: '80%', Icon: <FaHtml5 className='mb-2 inline' size={25} />}
    const Skill3 = {Title: 'CSS', Percentage: '80%', Icon: <FaCss3Alt className='mb-2 inline' size={25} />}
    const Skill4 = {Title: 'PHP', Percentage: '60%', Icon: <SiPhp className='mb-2 inline' size={25} />}
    const Skill5 = {Title: 'MongoDB', Percentage: '70%', Icon: <SiMongodb className='mb-2 inline' size={25} />}
    const Skill6 = {Title: 'SQL', Percentage: '80%', Icon: <FaDatabase className='mb-2 inline' size={25} />}
    const Skill7 = {Title: 'Python', Percentage: '80%', Icon: <FaPython className='mb-2 inline' size={25} />}
    const Skill8 = {Title: 'C++', Percentage: '60%', Icon: <SiCplusplus className='mb-2 inline' size={25} />}
    const Skill9 = {Title: 'Java', Percentage: '50%', Icon: <FaJava className='mb-2 inline' size={25} />}
    const Skill10 = {Title: 'Kotlin', Percentage: '50%', Icon: <SiKotlin className='mb-2 inline' size={25} />}
    const Skill11 = {Title: 'Git', Percentage: '80%', Icon: <FaGitAlt className='mb-2 inline' size={25} />}
    const Skill12 = {Title: 'Bash', Percentage: '60%', Icon: <SiGnubash className='mb-2 inline' size={25} />}
    const Skills = [Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, Skill11, Skill12]
    
  return (
    <div className='bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-200 p-10 mb-10'>
      <div id="skills" onClick={toggleAccordion} className="flex justify-between cursor-pointer">
        <h2 className="animate-slide-in-left opacity-0 text-2xl font-semibold" style={{ "--delay": 0.8 + "s" }}>
          <p className='flex justify-center items-center'><GoGear className='mr-2'/> Skills</p>
        </h2>
        {isArrowDown ? <IoIosArrowDown size={25}/> : <IoIosArrowUp size={25}/>}
      </div>
      {isOpen && ( <div className='mt-8 cursor-normal'>
        {Skills.sort((a, b) => b.Percentage.localeCompare(a.Percentage)).map((item, index) => (<SkillItem myItem={item} index={index+1} key={item.Title}/>))}
        </div>)}
    </div>
  )
}

export default Skills