import './Navbar.css';
import React from 'react';
import logo from '../Assets/logo.png'

const Navbar = () => {


    return (
        <nav>
            <img src={ logo } alt="logo" className="logo"/>
            <ol className="links-container">
                <li>
                    <a href="#about-me" className="nav-link">about me</a>
                </li>
                <li>
                    <a href="my-work" className="nav-link">my work</a>
                </li>
                <li>
                    <a href="#resume" className="nav-link">resume</a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">contact me</a>
                </li>
            </ol>
        </nav>
    )
}


export default Navbar;