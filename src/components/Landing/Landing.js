import React from 'react';
import classes from './Landing.module.scss';

const Landing = () => {
    return (
        <section className={`d-flex flex-column align-items-center justify-content-center text-center ${classes.Landing}`}>
            <h1>Hi, I'm Ashima</h1>
            <h2>I am a full stack developer</h2>
        </section>
    );
};

export default Landing;