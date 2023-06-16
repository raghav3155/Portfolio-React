import React from "react";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";
import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Raghav Singh"
                    date="01 Jan 2023"
                    image={Blog1}
                    title="This is a test topic"
                    description="Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <BlogCard
                    user="Raghav Singh"
                    date="01 Jan 2023"
                    image={Blog2}
                    title="This is a test topic"
                    description="Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <BlogCard
                    user="Raghav Singh"
                    date="01 Jan 2023"
                    image={Blog3}
                    title="This is a test topic"
                    description="Lorem epsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </Section>
    );
};

export default Blogs;
