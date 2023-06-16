import React from "react";
import "./style.scss";
import logo from "../../../images/icons8-javascript.svg";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="logo">
                <img
                    src={logo}
                    alt="Website Logo"
                />
            </div>
            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("blogs")}
                >
                    Blogs
                </span>
                <CallToAction
                    text="Contact Me"
                    action={() => scrollToSection("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;
