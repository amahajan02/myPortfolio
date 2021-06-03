import React, { useEffect, useRef, useState } from 'react';
import NavItem from '../Navigation/NavigationItems/NavigationItem';
import classes from './Toolbar.module.scss';

const Toolbar = () => {
    const items = [{
        name: 'Home',
        path: 'home'
    }, {
        name: 'About',
        path: 'about'
    }, {
        name: 'Resume',
        path: 'resume'
    }, {
        name: 'Contact',
        path: 'contact'
    }];

    const header = useRef();
    let headerOffset = 0;

    useEffect(() => {
        headerOffset = header.current.offsetTop;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (headerOffset - window.scrollY <= 0) {
                header.current.classList.add('fixed-top');
            } else {
                header.current.classList.remove('fixed-top');
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={classes.Header} ref={header}>
            <div className="container d-flex align-items-center justify-content-between">
                <div className={classes.Logo}>
                    <h1>
                        <a href="#home">Ashima</a>
                    </h1>
                </div>
                <nav className={"navbar " + classes.Menu}>
                    <ul>
                        {items.map(i => <NavItem path={i.path} name={i.name} key={i.name} />)}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Toolbar;