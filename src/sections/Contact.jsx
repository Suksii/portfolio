import {MdOutlinePhoneInTalk} from "react-icons/md";
import {BiUser} from "react-icons/bi";
import {LuMessageCircle} from "react-icons/lu";
import { GoMail} from "react-icons/go";
import React, {useRef, useState} from "react";
import  emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTheme} from "../context/ThemeContext.jsx";
import Social from "../components/Social.jsx";

const Contact = ({handleOpen}) => {

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const {isDarkMode} = useTheme();

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm('service_b6gb4xa', 'template_c3wcmqd', form.current, {
                publicKey: '5mY7gK77PcQJ7OMZO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully!', {
                        position: "top-center",
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Email not sent!', {
                        position: "top-center",
                    })
                },
            ).finally(() => {
            setLoading(false);
        });
        e.target.reset();
    }


    return (
        <>
                <ToastContainer position={"top-center"}
                                autoClose={1000}
                                closeOnClick
                                closeButton={false}
                                limit={1}
                />
        <div className="py-10">
            <h2 className="text-4xl flex justify-center">Contact</h2>
                <div className="flex items-center flex-col md:flex-row py-10">
                    <div style={{flex: 1}} className="justify-center items-center inline-grid gap-5 pb-10 md:pb-0 text-lg">
                        <div className="flex gap-3">
                            <MdOutlinePhoneInTalk size={30}/>
                            <p className="font-semibold">+382 69 741 999</p>
                        </div>
                        <div className="flex gap-3">
                            <GoMail size={30}/>
                            <p className="font-semibold">
                                <a href="mailto: ramovic225@gmail.com" className="decoration-0">ramovic225@gmail.com</a>
                            </p>
                        </div>
                        <Social handleOpen={handleOpen}/>
                    </div>
                    <div style={{flex: 1}} className="flex justify-center">
                        <form className="w-[90vw] md:w-[90%]" ref={form} onSubmit={sendEmail}>
                            <div className="py-2 relative">
                                <input name="user_name"
                                       placeholder="Name"
                                       className="w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none"
                                       required={true}/>
                                <BiUser size={22} className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400"/>
                            </div>
                            <div className="py-2 relative">
                                <input type="email"
                                       name="user_email"
                                       placeholder="Email"
                                       className="w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none"
                                       required={true}/>
                                <GoMail size={22} className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400"/>
                            </div>
                            <div className="py-2 relative">
                                <textarea name="message"
                                          placeholder="Message"
                                          className="h-[150px] w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none overflow-y-hidden"
                                          required={true}/>
                                <LuMessageCircle size={22} className="absolute top-8 -translate-y-1/2 right-4 text-gray-400"/>
                            </div>
                            <div className="py-2">
                                <button className={`w-full ${isDarkMode ? 'bg-white text-black hover:border-white hover:bg-black hover:text-white' : ' bg-black text-white hover:border-black hover:bg-white hover:text-black'} font-semibold border px-4 py-2 rounded-full duration-500`}>{loading ? 'Sending...' : 'Send'}</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Contact;