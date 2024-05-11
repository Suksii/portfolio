import React, {useState} from 'react';
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {IoClose} from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import {useTheme} from "../context/ThemeContext.jsx";
const Navbar = ({scrollToSection}) => {

    const navItems = ["About", "Projects", "Contact"];
    const [toggle, setToggle] = useState(false);
    const {toggleTheme, isDarkMode} = useTheme();


    return (
        <>
            <div className={`hidden md:flex justify-between py-2 ${isDarkMode ? 'border-white' : 'border-black'} border-b w-[80%] mx-auto `}>
                <div className={`px-5 py-3 ${isDarkMode ? 'bg-white' : 'bg-black'} fancy_border_radius rounded-l-lg rounded-r-[40%]`}>
                    <span className="text-3xl cursor-default font-dancing font-bold">ŠR</span>
                </div>
                <div className={`${isDarkMode ? 'text-white' : 'text-black'} flex justify-center gap-10 text-2xl items-center`}>
                    {navItems.map((item, index) => (
                        <div key={index}
                             onClick={() => scrollToSection(item)}
                             className='hover:underline hover:underline-offset-8 cursor-pointer py-3 duration-500 font-space'>
                            {item}
                        </div>
                    ))}
                    <div className="cursor-pointer mx-12" onClick={toggleTheme}>
                        {isDarkMode ? <IoMoonOutline size={30}/> :
                            <IoSunnyOutline size={30}/>}
                    </div>
                </div>
            </div>
            <div className="md:hidden flex justify-between items-center">
                <div className={`px-5 py-3 ${isDarkMode ? 'bg-white' : 'bg-black'} z-50 fancy_border_radius rounded-l-lg rounded-r-[40%]`}>
                    <span className="text-3xl cursor-default font-dancing font-bold">ŠR</span>
                </div>
                <div className="cursor-pointer mx-12 z-50" onClick={toggleTheme}>
                    {isDarkMode ? <IoMoonOutline size={30}/> :
                        <IoSunnyOutline size={30}/>}
                </div>
                <div className="p-3 cursor-pointer z-50" onClick={() => setToggle(!toggle)}>
                    {toggle ? <IoClose size={30}/> : <HiOutlineMenuAlt3 size={30}/>}
                </div>
            </div>
            <div className="relative">
                <div className={`md:hidden absolute bg-black w-full top-0 text-gray-300 left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} flex justify-center items-center z-40 duration-500 flex-col`}>
                    {navItems.map((item, index) => (
                        <div key={index}
                             className='cursor-pointer py-[5rem] text-2xl duration-500 hover:bg-gray-800 hover:text-white w-full text-center'
                             onClick={() => {
                                 setToggle(false)
                                 scrollToSection(item)
                             }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Navbar;