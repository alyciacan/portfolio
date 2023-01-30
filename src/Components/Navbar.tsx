import './Navbar.css';
import React from 'react';
import logo from '../Assets/logo.png'

const Navbar = () => {


    return (
        <nav>
            <img src={ logo } alt="logo" className="logo"/>
            <section className="links-container">
                <a href="#about-me" className="nav-link">about me</a>
                <a href="my-work" className="nav-link">my work</a>
                <a href="#resume" className="nav-link">resume</a>
                <a href="#contact" className="nav-link">contact me</a>
            </section>
        </nav>
    )
}


export default Navbar;