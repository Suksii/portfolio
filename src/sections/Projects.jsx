import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import {useTheme} from "../context/ThemeContext.jsx";
import ReligiousObjectImg from '../assets/religious-objects/religious-objects_region-page.png';
import TaskProjectImg from '../assets/task-project/task-project_admin-page.png';
import MoviesTvShowsImg from '../assets/movie-tvshow/movie-tvshow_tvshow-page.png';

const Projects = ({handleOpen}) => {

    const projects = [
        {
            title: 'Movie & TV Shows',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: <p>This React.js web application allows users to browse, search, and interact with a collection of movies and TV shows. It features separate pages for movies and TV shows, detailed individual pages, a loading spinner for data fetching, search functionality, and pagination. Ratings are dynamically displayed in a circular progress bar, and content is shown in card formats with a slider for enhanced browsing. <br/> The actions component includes options to copy URLs, share links, watch YouTube trailers, and view on Netflix. Technologies used include React.js, TailwindCSS, Axios, React Router DOM, and JSON Server. Additional libraries include Slick Carousel, React Spinners, React Toastify, React Icons, and React CountUp. Key JavaScript functionalities and React hooks like useEffect and useState are employed for state and side-effect management.</p>,
            url: '',
            image: MoviesTvShowsImg,
            github: 'https://github.com/Suksii/movie-show'
        },
        {
            title: 'Religious Objects',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: <p>This React.js web application showcases various religious objects across different regions in Montenegro, developed based on Government requirements. Users can explore sites through an intuitive, region-based navigation system.<br/>Key features include displaying religious objects by region, dynamic pages for each region and object, an interactive map, and image sliders. The application supports smooth scrolling and interval-based functionalities.<br/>Technologies used include JavaScript for core functionalities, React for building the user interface with useState, React Router DOM for routing, and SASS for styling.<br/>Navigate to the home page to view regions, click on a region to see its religious objects, and click on an object to view detailed information and images in a slider format.</p>,
            url: 'http://vjerskiobjekticg.online/',
            image: ReligiousObjectImg,
            github: 'https://github.com/Suksii/religious-objects'
        },
        {
            title: 'Task Project',
            subtitles: [
                'React',
                'Javascript'
            ],
            description: <p>Task Project is my first React.js endeavor, crafted for task management, leveraging JavaScript functionalities for a smooth user interface.<br/>Key features include task administration via an Administration Page and task display on the Main Page, with easy toggling between the two. Technical details include React.js, JavaScript, and SASS technologies, with dependencies on "react-icons" and "sass".</p>,
            url: '',
            image: TaskProjectImg,
            github: 'https://github.com/Suksii/task-project'
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
                            <div  style={{flex: 1}} className="flex flex-col justify-between p-5">
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
                                    <p className="py-3 text-xl md:text-base xl:text-lg">{project.description}</p>
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
                            <div style={{flex: 1}} className="flex justify-center items-end rounded-t-3xl">
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