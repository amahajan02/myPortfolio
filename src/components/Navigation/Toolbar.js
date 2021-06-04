import React, { useEffect, useRef } from 'react';
import NavItem from '../Navigation/NavigationItems/NavigationItem';
import classes from './Toolbar.module.scss';

const Toolbar = () => {
    const items = [{
        name: 'Home',
        path: 'home',
        active: false
    }, {
        name: 'About',
        path: 'about',
        active: false
    }, {
        name: 'Resume',
        path: 'resume',
        active: false
    }, {
        name: 'Contact',
        path: 'contact',
        active: false
    }];

    const header = useRef();
    const headerOffsetTop = useRef(null);

    useEffect(() => {
        headerOffsetTop.current = header.current.offsetTop;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (headerOffsetTop.current - window.scrollY <= 0) {
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
                <nav className={"navbar " + classes.Menu} id="navbar">
                    <ul>
                        {items.map(i => <NavItem path={i.path} name={i.name} key={i.name} />)}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Toolbar;