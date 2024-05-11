import {createContext, useContext, useEffect} from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const ThemeContext = createContext(null);

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev)
    }

    const themeMode = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeMode);
    }, [themeMode]);


    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;