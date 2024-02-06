import Image from '../../assets/My-Image.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import './HeroSections.css';
const HeroSection = () => {
    return (
        <>
            <section className="hero-section-main-container">
                <div className="hero-section-container">
                    <div className="hero-image-container">
                        <img src={Image} alt="My-Image" className="hero-image"/>
                    </div>
                    <div className="hero-section-content">
                        <h1 className="hero-section-content-top">{`Hello I'm Satyam Kumar`}</h1>
                       <div className="hero-section-content-bottom">
                            <div className="hero-section-content-left">
                                <a href=""><p>{`LET'S CONNECT`}</p></a>
                            </div>
                            <div className="hero-section-content-right">
                                <a href="" className='hero-section-link'><FaGithub /></a>
                                <a href="" className='hero-section-link'><FaLinkedin/></a>
                                <a href="" className='hero-section-link'><SiLeetcode/></a>
                                <a href="" className='hero-section-link'><FaTwitter/></a>
                            </div>
                       </div>
                    </div>
                </div>
            </section>
        </>
    )
}

Error

export default HeroSection;