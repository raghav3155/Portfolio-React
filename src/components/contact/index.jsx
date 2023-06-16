import React from "react";
import "./style.scss";
import Section from "../shared/section";
import ContactInfo from "./contact-info";
import Form from "./form";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any question ? Feel free to contact"
            background="light"
        >
            <div className="contact-content-wrapper"></div>
            <Form />
        </Section>
    );
};

export default Contact;
