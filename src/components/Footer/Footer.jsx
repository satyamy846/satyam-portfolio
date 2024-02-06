import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
const Footer = ()=>{
    return (
        <>
            <div id="footer">
                <div className="footer-container">
                    <div className="footer-title">
                        <h3>Satyam Kumar</h3>
                    </div>
                    <div className="footer-link-container">
                        <a href="" className='footer-link'><FaGithub /></a>
                        <a href="" className='footer-link'><FaLinkedin/></a>
                        <a href="" className='footer-link'><SiLeetcode/></a>
                        <a href="" className='footer-link'><FaTwitter/></a>
                    </div>
                    <div className="footer-content">
                        <p>© Copyright 2022. All right reserved, ATOM.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default Footer;