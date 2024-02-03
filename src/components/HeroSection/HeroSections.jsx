import Image from '../../assets/My-Image.jpg';
const HeroSection = () => {
    return (
        <>
            <section className="hero-section-main-container">
                <div className="hero-section-container">
                    <div className="hero-image">
                        <img src={Image} alt="My-Image" />
                    </div>
                    <div className="hero-section-content">
                        <h1>I am
                            <span>Software <br />Developer</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde architecto rem ullam delectus corporis facere iusto ea accusantium esse?</p>

                    </div>
                </div>
            </section>
        </>
    )
}

Error

export default HeroSection;