import React from "react";
import "./style.scss";

const Showcase = ({ data, transition }) => {
    return (
        <div className="projects-showcase">
            {data.map((project) => (
                <div className="showcase-item">
                    <div className="meta-content">
                        <h3> {project.name} </h3>
                        <div className="go-to-cta">
                            <span className="text">Projects Details</span>
                        </div>
                    </div>
                    <img
                        src={project.media.thumbnail}
                        alt="project-media-thumbnail"
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;
