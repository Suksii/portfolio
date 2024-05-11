import './App.css'
import Header from "./sections/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import {useRef} from "react";
import {FaArrowUp} from "react-icons/fa6";
import Footer from "./components/Footer.jsx";
import {useTheme} from "./context/ThemeContext.jsx";
function App() {

    const sectionRefs = {
        About: useRef(null),
        Projects: useRef(null),
        Contact: useRef(null)
    }
    const scrollToSection = (sectionId) => {
        const sectionRef = sectionRefs[sectionId];
        if (sectionRef && sectionRef.current)
        sectionRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const handleOpen = (url) => {
        window.open(url);
    }
    const { isDarkMode } = useTheme();

  return (
    <>
        <Navbar scrollToSection={scrollToSection}/>
        <Header handleOpen={handleOpen}
                scrollToSection={scrollToSection} />
        <div ref={sectionRefs.About}>
            <About/>
        </div>
        <div ref={sectionRefs.Projects}>
            <Projects handleOpen={handleOpen}/>
        </div>
        <div ref={sectionRefs.Contact}>
            <Contact handleOpen={handleOpen}/>
        </div>
        <div>
            <button className={`flex justify-center items-center w-fit mx-auto border ${isDarkMode ? 'border-white hover:bg-white text-white hover:text-black' : 'border-black hover:text-white hover:bg-black'} duration-500 rounded-full p-3 mb-10 md:my-12`} onClick={scrollToTop}>
                <FaArrowUp className="svg3"/>
            </button>
            <Footer handleOpen={handleOpen}/>
        </div>
    </>
  )
}

export default App
