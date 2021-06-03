import classes from './Contact.module.scss';
import React from 'react';

const Contact = () => {
    return (
        <section className="Section" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className={classes.SocialLinks}>
                    <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-envelope-fill"></i>
                        <a href="mailto:ashima.mahajan02@gmail.com">ashima.mahajan02@gmail.com</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-linkedin"></i>
                        <a href="//linkedin.com/in/ashima-mahajan-021990">linkedin/ashima</a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <i className="bi bi-pencil-square"></i>
                        <a href="//ashima-mahajan02.medium.com">medium/ashima</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;