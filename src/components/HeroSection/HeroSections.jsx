import {Image} from '../../assets/My-Image.jpg';
const HeroSection = ()=>{
    return(
        <>
            <section className="hero-section-main-container">
                <div className="hero-section-content">
                <h1>I am 
                <span>Software <br/>Developer</span>
                </h1>      
                    
                </div>

                <div className="hero-image">
                    <img src={Image} alt="" />
                </div>
            </section>
        </>
    )
}


export default HeroSection;