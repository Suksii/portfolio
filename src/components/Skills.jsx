import React from 'react';
import HTML5 from '../assets/html5.png';
import CSS3 from '../assets/css3.jpg';
import JS from '../assets/js.svg';
import ReactJS from '../assets/react.svg';
import NodeJS from '../assets/node-js.svg';
import git from '../assets/git.svg';
import SASS from '../assets/sass.svg';
import Tailwind from '../assets/tailwind.svg';
import MySQL from '../assets/MySQL.svg';
import {useTheme} from "../context/ThemeContext.jsx";
import {motion} from "framer-motion";

const Skills = () => {

    const mainSkills = [
        {
            name: 'HTML5',
            image: HTML5
        },
        {
            name: 'CSS3',
            image: CSS3
        },
        {
            name: 'JavaScript',
            image: JS
        },
        {
            name: 'ReactJS',
            image: ReactJS
        },
        {
            name: 'NodeJS',
            image: NodeJS
        },
        {
            name: 'Git',
            image: git
        },
        {
            name: 'SASS',
            image: SASS
        },
        {
            name: 'Tailwind CSS',
            image: Tailwind
        },
        {
            name: 'MySQL',
            image: MySQL
        }
    ]

    const otherSkills = ['C', 'C++', 'MATLAB', 'NextJS', 'Vue', 'Linux', 'Arduino'];

    const { isDarkMode } = useTheme();

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const skillVariants = {
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }


    return (
        <div>
            <p className="uppercase font-semibold pb-10">My skills</p>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    mainSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={skillVariants}
                            className="flex flex-col items-center">
                            <img src={skill.image} alt={skill.name} className="h-20 w-20" />
                            <p className="text-lg mt-2 font-semibold">{skill.name}</p>
                        </motion.div>
                    ))
                }
            </motion.div>
            <h2 className="uppercase font-semibold py-10">Other skills</h2>
            <motion.div className="flex justify-center flex-wrap"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show">
                {
                    otherSkills.map((skill, index) => (
                        <motion.div key={index}
                                    variants={skillVariants}
                                    style={{flex: 1}}
                                    className={`text-center font-semibold w-[100px] min-w-[100px] ${isDarkMode ? 'bg-gray-500' : 'bg-gray-200'}  rounded-full py-2 m-2`}>
                            {skill}
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default Skills;