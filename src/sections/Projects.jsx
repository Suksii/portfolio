import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import {useTheme} from "../context/ThemeContext.jsx";

const Projects = ({handleOpen}) => {

    const projects = [
        {
            title: 'Project 1',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc',
            url: 'https://www.google.com',
            image: 'https://via.placeholder.com/150',
            github: ''
        },
        {
            title: 'Project 2',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc',
            url: 'https://www.google.com',
            image: 'https://via.placeholder.com/150',
            github: ''
        },
        {
            title: 'Project 3',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, varius nunc',
            image: 'https://via.placeholder.com/150',
            github: ''
        }
    ]

    const { isDarkMode } = useTheme();

    return (
        <div className="py-2 md:py-10">
            <h2 className="text-4xl flex justify-center">Projects</h2>
            <div className="flex flex-col w-full md:w-[80%] mx-auto">
                {
                    projects.map((project, index) => (
                        <div key={index} className={`flex justify-evenly reverse ${isDarkMode ? 'border' : 'shadow-md md:shadow-2xl' } md:rounded-3xl min-h-[400px] my-10 md:px-6`}>
                            <div className="flex flex-col justify-between p-5">
                                <div>
                                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                                    <div className="flex gap-5 items-center">
                                        {
                                            project.subtitles.map((subtitle, index) => (
                                                <div key={index} className={`${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} w-fit py-1 px-4 rounded-full`}>
                                                    <h3 className="text-lg uppercase font-semibold">{subtitle}</h3>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <p className="py-3">{project.description}</p>
                                </div>
                                <div className="flex justify-between">
                                    <div onClick={() => handleOpen(project.github)}
                                         className="flex items-center gap-2 cursor-pointer hover:translate-x-1 duration-200">
                                        <p>Github</p>
                                        <BsArrowRight/>
                                    </div>
                                    {project.url && <div className="flex items-center gap-2 cursor-pointer hover:translate-x-1 duration-200"
                                                         onClick={() => handleOpen(project.url)}>
                                                        <p>Visit</p>
                                                        <BsArrowRight/>
                                    </div>}
                                </div>
                            </div>
                            <div className="flex justify-center items-end rounded-t-3xl">
                                <img src={project.image} alt={project.title} className="rounded-t-3xl object-cover h-[380px]"/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;