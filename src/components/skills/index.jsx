import React from "react";
import "./style.scss";

import Section from "../shared/section";
import Techicons from "../../images/Group 5100.png";
import CallToAction from "../shared/CallToAction";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={Techicons}
                        alt="tech-icons"
                    />
                </div>
                <div className="right-col">
                    <h2> Skills </h2>
                    <p>
                        I am a skilled developer proficient in HTML, CSS,
                        JavaScript, React, MongoDB, and Node.js. With expertise
                        in front-end design, interactive functionality, and
                        back-end development, I create dynamic web applications
                        with seamless user experiences.
                    </p>
                    <CallToAction text="Download CV" />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
