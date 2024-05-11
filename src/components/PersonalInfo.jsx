import React from 'react';
import {CiMail} from "react-icons/ci";
import {IoHomeOutline} from "react-icons/io5";
import {LuCalendarDays} from "react-icons/lu";
import {MdOutlinePhoneInTalk} from "react-icons/md";
import {RiGraduationCapLine} from "react-icons/ri";
import {FaRegUser} from "react-icons/fa6";


const PersonalInfo = () => {

    const personalInfo = [
        {
            icon: <FaRegUser size={30}/>,
            info: 'Šućo Ramović'
        },
        {
            icon: <IoHomeOutline size={30}/>,
            info: 'Podgorica, Montenegro'
        },
        {
            icon: <LuCalendarDays size={30}/>,
            info: '27.07.1996'
        },
        {
            icon: <MdOutlinePhoneInTalk size={30}/>,
            info: '+382 69 741 999'
        },
        {
            icon: <RiGraduationCapLine size={30}/>,
            info: 'Faculty of Electrical Engineering, University of Montenegro'
        },
        {
            icon: <CiMail size={30}/>,
            info: 'ramovic225@gmail.com'
        }
    ]

    return (
        <div>
            <p className="uppercase font-semibold pb-10">My personal Info</p>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    personalInfo.map((info, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="text-black">
                                {info.icon}
                            </div>
                            <div className="text-lg font-semibold">
                                {info.info}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PersonalInfo;