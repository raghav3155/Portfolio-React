import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import HeroImage from "../../../images/DP2.png";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="hello"
                                />
                            </span>
                            <span className="text"> </span>
                        </span>
                        <span className="big-text"> I am Raghav Singh </span>
                    </h1>
                    <p>
                        Welcome to my website! I am thrilled to showcase my
                        expertise in a range of essential web development
                        technologies, including HTML, CSS, JavaScript, React,
                        MongoDB, and Node.js
                    </p>
                    <CallToAction
                        text="Get-in-touch"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={HeroImage}
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
