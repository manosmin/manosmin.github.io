import React from 'react';
import { useIsVisible } from '../App';
import SkillItem from './SkillItem';
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaGitAlt, FaDocker  } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiMongodb, SiGnubash, SiPhp } from "react-icons/si";

function Skills() {

    const [containerRef1, isVisible1] = useIsVisible({});
    const [containerRef2, isVisible2] = useIsVisible({});

    const Skill1 = { Title: 'JavaScript', Percentage: '90%', Icon: <IoLogoJavascript className='mb-2 inline' size={25} /> };
    const Skill2 = { Title: 'HTML5', Percentage: '80%', Icon: <FaHtml5 className='mb-2 inline' size={25} /> };
    const Skill3 = { Title: 'CSS3', Percentage: '80%', Icon: <FaCss3Alt className='mb-2 inline' size={25} /> };
    const Skill4 = { Title: 'PHP', Percentage: '65%', Icon: <SiPhp className='mb-2 inline' size={25} /> };
    const Skill5 = { Title: 'MongoDB', Percentage: '65%', Icon: <SiMongodb className='mb-2 inline' size={25} /> };
    const Skill6 = { Title: 'SQL', Percentage: '75%', Icon: <FaDatabase className='mb-2 inline' size={25} /> };
    const Skill7 = { Title: 'Python', Percentage: '75%', Icon: <FaPython className='mb-2 inline' size={25} /> };
    const Skill8 = { Title: 'C++', Percentage: '60%', Icon: <SiCplusplus className='mb-2 inline' size={25} /> };
    const Skill9 = { Title: 'Java', Percentage: '60%', Icon: <FaJava className='mb-2 inline' size={25} /> };
    const Skill10 = { Title: 'Kotlin', Percentage: '50%', Icon: <SiKotlin className='mb-2 inline' size={25} /> };
    const Skill11 = { Title: 'Git', Percentage: '75%', Icon: <FaGitAlt className='mb-2 inline' size={25} /> };
    const Skill12 = { Title: 'Bash', Percentage: '65%', Icon: <SiGnubash className='mb-2 inline' size={25} /> };
    const Skill13 = { Title: 'Docker', Percentage: '50%', Icon: <FaDocker className='mb-2 inline' size={25} /> };
    const Skills = [Skill1, Skill2, Skill3, Skill4, Skill5, Skill6, Skill7, Skill8, Skill9, Skill10, Skill11, Skill12, Skill13];

    return (
        <div id="skills" className='bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24'>
            <div className="flex justify-between">
                <h2 ref={containerRef1} className={`${isVisible1 && 'animate-drop-in'} opacity-0 text-2xl font-semibold`} style={{ "--delay": 0.2 + "s" }}>
                    <p className='flex justify-center items-center'><FaScrewdriverWrench className='mr-2' /> Tech Stack</p>
                </h2>
            </div>
            <p ref={containerRef2} className={`${isVisible2 && 'animate-fade-in'} opacity-0 mt-8`} style={{ '--delay': 0.4 + 's' }}>Τhese are the technologies and programming languages  that I've used the most so far and the level I'm at.</p>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6 overflow-x-hidden md:overflow-x-visible'>
                {Skills.sort((a, b) => b.Percentage.localeCompare(a.Percentage)).map((item, index) => (
                    <SkillItem myItem={item} index={index + 1} key={item.Title} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
