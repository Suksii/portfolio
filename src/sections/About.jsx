import PersonalInfo from "../components/PersonalInfo.jsx";
import Skills from "../components/Skills.jsx";
import {useTheme} from "../context/ThemeContext.jsx";
import {useLocalStorage} from "@uidotdev/usehooks";
import MyStory from "../components/MyStory.jsx";

const About = () => {

    const tabs = ['Personal Info', 'Skills', 'My Story'];
    const [selectedTab, setSelectedTab] = useLocalStorage('selectedTab','Personal Info');
    const { isDarkMode } = useTheme();

    const renderContent = () => {
        switch (selectedTab) {
            case 'Personal Info':
                return <PersonalInfo />;
            case 'Skills':
                return <Skills />;
            case 'My Story':
                return <MyStory />;
            default:
                return <PersonalInfo />;
        }
    }

    return (
        <div className="py-2 md:py-10">
           <h2 className="text-4xl flex justify-center">About</h2>
            <div className="w-[95%] md:w-1/2 mx-auto border-gray-500 border-2 rounded-full flex justify-between p-0.5 my-10 font-semibold">
                {
                    tabs.map((tab, index) => (
                        <button key={index}
                                className={`rounded-full py-3 duration-500 ${selectedTab === tab ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white') : (isDarkMode ? 'bg-black text-white' : 'bg-white text-black')}`}
                                style={{flex: 1}}
                                onClick={() => setSelectedTab(tab)}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>
            <h2 className="w-[90%] mx-auto md:w-1/2 md:py-12">
                    {renderContent()}
            </h2>
        </div>
    );
};

export default About;