import React from "react";
import "./style.scss";

import { BsArrowRightShort } from "react-icons/bs";

const CallToAction = ({ text, action, icon }) => {
    return (
        <div
            className="call-to-action"
            onClick={action}
        >
            <span className="text">{text}</span>
            <span className="contact-icon">
                <BsArrowRightShort />
            </span>
        </div>
    );
};

export default CallToAction;
