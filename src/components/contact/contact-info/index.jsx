import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                Feel free to contact me about any skills related to HTML, CSS,
                Javascript, Node.js
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+61 0401 566 702</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">raghav3155@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
