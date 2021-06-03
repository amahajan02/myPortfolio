import classes from './Resume.module.scss';
import React from 'react';

const Resume = () => {
    return (
        <section className="Section" id="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>I have 8 years of experience in web development. Exposure in end to end development of software products, right from user interface development, debugging,  unit testing, UI CICD pipeline, SonarQube integration and documentation. Have experience of working independently as well as in collaborative team environment.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className={classes.ResumeTitle}>Summary</h3>
                        <div className={classes.ResumeItem}>
                            <p>
                                <em>Experience in developing web applications of different domains: IoT, parking management and set top box applications using various technologies like JavaScript, Angular 9+, Typescript, ES6, RxJs, HTML, CSS, Bootstrap, Angular Material, Karma Jasmine.</em>
                            </p>
                            <ul>
                                <li>Have experience of setting up basic UI CI/CD pipeline.</li>
                                <li>Have been working under Agile (SCRUM) methodology from past 5 years.</li>
                                <li>Experience in using tools like JIRA, GIT, SonarQube.</li>
                            </ul>
                        </div>
                        <h3 className={classes.ResumeTitle}>Education</h3>
                        <div className={classes.ResumeItem}>
                            <h4>Bachelor of Technology</h4>
                            <h5>2009-2013</h5>
                            <p><em>Punjab University, Chandigarh</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-5">
                        <h3 className={classes.ResumeTitle}>Professional Experience</h3>
                        <div className={classes.ResumeItem}>
                            <h4>Software Engineer</h4>
                            <p><em>Siemens Technology</em></p>
                            <ul>
                                <li>Worked in Dubai Expo 2020 project</li>
                                <li>Developed UI screens using Angular 9, Typescript, HTML, SCSS, Highcharts</li>
                                <li>Used angular service worker for caching of static assets to improve performance.</li>
                                <li>Used RxJs to manage continuous data stream</li>
                            </ul>
                        </div>
                        <div className={classes.ResumeItem}>
                            <h4>Senior Software Engineer</h4>
                            <p><em>Nagravision</em></p>
                            <ul>
                                <li>Developed UI screens using vanilla Javascript for set top box based application</li>
                                <li>Developed touch framework for the application. Converted raw touch events to swipe, drag and ok gestures.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Resume;