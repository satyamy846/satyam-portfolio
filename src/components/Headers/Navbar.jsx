import './Navbar.css';
import image from '../../assets/portfolio-logo.png';
import { useState } from 'react';
const Navbar = ()=>{

    return(
        <>
            <header className='header-container'>
                <nav className='nav-container'>
                    <div className="logo-container">
                        <a href="/"><img src={image} alt="logo" className='logo-img'/></a>
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="resume-btn-container">
                        <button className="resume-btn">
                            Download Resume
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )    
}

export default Navbar;