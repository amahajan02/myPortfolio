import React from 'react';
import classes from './About.module.scss';

const About = () => {
    const details = [{
        title: 'Name',
        value: 'Ashima Mahajan'
    }, {
        title: 'Experience',
        value: '8 years'
    }, {
        title: 'Location',
        value: 'Bengaluru'
    }]
    return (
        <section className={classes.Section} id="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 pr-5">
                        <h3>About me</h3>
                        <p class="mt-4">I am a full stack developer with 8 years of experience.
                        I have worked in domains like IoT and Set Top Box. I like my code to be structured and love spending time on fixing little details.
                            I have an eye for neat code and constantly work towards code optimization and performance improvements.</p>
                    </div>
                    <div className={`col-xl-3 px-5 ${classes.Image}`}></div>
                    <div className="col-xl-3 px-5">
                        <h2 class="mb-4">Details</h2>
                        {details.map(d => (
                            <div key={d.title} class="mb-3">
                                <span class="font-weight-bold">{d.title}:</span>
                                <span> {d.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;