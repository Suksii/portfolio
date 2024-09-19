import {BiUser} from "react-icons/bi";
import { GoMail } from "react-icons/go";
import {LuMessageCircle} from "react-icons/lu";
import  emailjs from '@emailjs/browser';
import {useTheme} from "../context/ThemeContext.jsx";
import { useRef, useState } from "react";

const SendMessageForm = () => {

    const [loading, setLoading] = useState(false);
    const {isDarkMode} = useTheme();
    const form = useRef();


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
        <form className="w-full" ref={form} onSubmit={sendEmail} style={{ flex: 1 }}>
            <div className="py-2 relative">
                <input name="user_name"
                    placeholder="Name"
                    className="w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none"
                    required={true} />
                <BiUser size={22} className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
            <div className="py-2 relative">
                <input type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none"
                    required={true} />
                <GoMail size={22} className="absolute top-1/2 -translate-y-1/2 right-4" />
            </div>
            <div className="py-2 relative">
                <textarea name="message"
                    placeholder="Message"
                    className="h-[150px] w-full border-gray-300 border rounded-[30px] p-2 px-4 outline-none overflow-y-hidden"
                    required={true} />
                <LuMessageCircle size={22} className="absolute top-8 -translate-y-1/2 right-4"/>
            </div>
            <div className="py-2">
                <button className={`w-full ${isDarkMode ? 'bg-white text-black hover:border-white hover:bg-black hover:text-white' : ' bg-black text-white hover:border-black hover:bg-white hover:text-black'} font-semibold border px-4 py-2 rounded-full duration-500`}>{loading ? 'Sending...' : 'Send'}</button>
            </div>
        </form>
    )
}

export default SendMessageForm;