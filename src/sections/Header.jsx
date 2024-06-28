import React from 'react';
import Suco from '../assets/Suco.jpg';
import {FaGithub, FaLinkedin, FaHandPeace } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import {useTheme} from "../context/ThemeContext.jsx";

const Header = ({handleOpen, scrollToSection }) => {

    const { isDarkMode } = useTheme();
    function downloadPDF() {
        const url = 'https://suksii.github.io/portfolio/CV.pdf';
        const fileName = url.split('/').pop();
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => console.error("Error downloading the file: ", error));
    }

    return (
        <div className="py-[10vh]">
            <div className="text-center pb-10">
                <p className="text-xl leading-7 font-dancing tracking-widest">Hello, I'm</p>
                <h2 className="text-5xl leading-7">Šućo Ramović</h2>
            </div>
            <div className="flex justify-center gap-[6vw] items-center md:flex-row flex-col relative">
                <p className="text-3xl font-semibold text-center">Electrical Engineer</p>
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative rounded-full">
                    <img src={Suco} alt={"Suco"} className="absolute w-full fancy_border_radius object-cover h-full z-30" />
                    <div className="absolute bottom-1 left-4 bg-gray-300 bg-opacity-80 h-full w-full fancy_border_radius_2"></div>
                    <FaGithub size={60}
                              className="absolute top-2 right-8 cursor-pointer z-30"
                              onClick={() => handleOpen("https://github.com/Suksii")}
                    />
                    <FaLinkedin size={60}
                                className="absolute bottom-2 left-8 cursor-pointer z-30"
                                onClick={() => handleOpen("https://me.linkedin.com/in/%C5%A1u%C4%87o-ramovi%C4%87-58a728256")}
                    />
                </div>
                <p className="text-3xl font-semibold text-center">Frontend Developer</p>
            </div>
            <div className="flex justify-center gap-10">
                <button className={`button1 flex items-center gap-1 border-t-2 ${isDarkMode ? 'bg-white hover:border-white hover:bg-black hover:text-white' : 'hover:border-black hover:bg-white hover:text-black bg-black text-white'} min-w-[150px] px-4 py-2 rounded-full mt-10 duration-500 uppercase font-semibold`} onClick={() => scrollToSection('Contact')}>
                    Contact Me <FaHandPeace size={20} className="svg1 inline-block"/>
                </button>
                <button className={`button2 flex items-center gap-1 ${isDarkMode ? 'border-white hover:text-black hover:bg-white text-white' : 'border-black hover:text-white hover:bg-black '} border-b-2 px-4 py-2 rounded-full mt-10 ml-4 duration-500 uppercase font-semibold`} onClick={downloadPDF}>
                    Download CV <RxDownload size={20} className="svg2 inline-block"/>
                </button>
            </div>
        </div>


    );
};

export default Header;