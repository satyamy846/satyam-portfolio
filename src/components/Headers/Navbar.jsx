import './Navbar.css';
import image from '../../assets/portfolio-logo.png';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    // const [showMenuIcon, setShowMenuIcon] = useState(false);
    return(
        <>  <div>

        
                <nav className='nav-container'>
                    <div className="logo-container">
                        <Link to="/"><img src={image} alt="logo" className='logo-img'/></Link>
                    </div>
                    <ul className='nav-items'>
                        <li><a href="/">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contactus">Contact Us</a></li>
                        <li><a href="">Download Resume</a></li>
                    </ul>
                    {/* <div className="resume-btn-container">
                        <button className="resume-btn">
                            Download Resume
                        </button>
                    </div> */}
                </nav>
                {/* <GiHamburgerMenu/> */}
                </div>
        </>
    )    
}

export default Navbar;