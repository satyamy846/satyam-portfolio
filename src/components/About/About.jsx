import Skills from '../Skills/Skill';
import './About.css';
const About = () => {
    return (
        <>
            <div id="about">
                <div className="about-container">
                    <div className="about-left-container">
                    <h2 className="">Who am I?</h2>
                    <h4 className="">{`I'm Satyam Kumar, a Full Stack Developer`}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quam esse obcaecati 
                    officiis facilis earum tempore recusandae officia eum laudantium accusantium, tempora sapiente 
                    corporis? Voluptatem est saepe assumenda reiciendis adipisci.</p>
                    </div>
                    <div className="about-right-container">
                        <h2>Skills</h2>
                        <Skills/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;