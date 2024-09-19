import React from 'react';
import {useTheme} from "../context/ThemeContext.jsx";

const Footer = () => {

    const { isDarkMode } = useTheme();
    const fullYear = new Date().getFullYear()

    return (
        <div className={`w-[80%] mx-auto border-t ${isDarkMode ? 'border-gray-300' : 'border-gray-800'}`}>
            <p className="text-center text-gray-400 text-sm py-2">© {fullYear} Šućo Ramović</p>
        </div>
    );
};

export default Footer;