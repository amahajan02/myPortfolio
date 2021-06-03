import React, { useEffect } from 'react';
import About from './About/About';
import Skills from './Skills/Skills';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';

const Main = () => {

    useEffect(() => {
        let aLinks = document.querySelectorAll('#navbar .scrollto');
        const handleScroll = () => {
          let position = window.scrollY + 200;
          aLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (!section) {
                return;
            }
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          })
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

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