import React from 'react';
import About from './About/About';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';

const Main = () => {
    return (
        <main>
            <About />
            <Skills />
            <Resume />
            <Contact />
        </main>
    );
};

export default Main;