import React from 'react';
import classes from './Skills.module.scss';

const Skills = () => {
    const skills = [
        { name: 'HTML', value: 100 },
        { name: 'CSS', value: 100 },
        { name: 'Javascript', value: 80 },
        { name: 'Angular', value: 80 },
        { name: 'React', value: 70 },
        { name: 'NodeJs', value: 65 },
        { name: 'Sonarqube', value: 80 },
        { name: 'CI/CD', value: 50 },
        { name: 'Karma/Jasmine', value: 70 },
        { name: 'PWA', value: 70 }
    ];
    return (
        <section className="Section" id="skills">
            <div class="container">
                <h2>Skills</h2>
                <div class="d-flex">
                    {skills.map(s => (
                        <div className={classes.SkillChip}>{s.name}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;