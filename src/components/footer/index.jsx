import React from "react";
import "./style.scss";

//import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/icons8-javascript.svg";
//import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
    return (
        <Section
            background="light"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="footer-logo"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Me
                    </li>
                </ul>
                <div className="copyright-text">
                    Copyright Raghav Singh | All Rights Reserved
                </div>
            </div>
        </Section>
    );
};
export default Footer;
