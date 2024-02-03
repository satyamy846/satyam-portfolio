import Image from '../../assets/My-Image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                                <a href=""></a>
                                <a href=""></a>
                                <a href=""></a>
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