import React from "react";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
import "./style.scss";
import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";

const Intro = () => {
    return (
        <>
            <div className="Intro-section">
                <div
                    className="vector-bg"
                    id="parallax"
                ></div>

                <img
                    src={cloud}
                    className="cloud"
                    alt="cloud"
                />

                <img
                    src={cloudSoft}
                    className="cloud-soft"
                    alt="cloud-soft"
                />
                <div className="content">
                    <Navigation />
                    <IntroContent />
                </div>
            </div>
        </>
    );
};

export default Intro;
