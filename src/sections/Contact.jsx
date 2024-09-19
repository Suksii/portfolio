import {MdOutlinePhoneInTalk} from "react-icons/md";
import { GoMail} from "react-icons/go";
import Social from "../components/Social.jsx";
import SendMessageForm from "../components/SendMessageForm.jsx";

const Contact = ({handleOpen}) => {

    return (
        <div className="w-[80%] mx-auto">
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
                        <SendMessageForm />
                    </div>
            </div>
        </div>
    );
};

export default Contact;