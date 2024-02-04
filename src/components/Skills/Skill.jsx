import './Skills.css';
const Skills = () => {
    return (
        <>
            <div id="skills">
            <div className="main-skills">
                <h3>Languages and Frameworks</h3>
                <div className="skills-container">
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
                <div className="skill">Node JS</div>
                <div className="skill">React JS</div>
                <div className="skill">C++</div>
                <div className="skill">MongoDB</div>
                <div className="skill">Javascript</div>
                <div className="skill">Express Js</div>
                </div>
            </div>
            <div className="other-skills">
                <h3>Developer Tools and Frameworks</h3>
                <div className="skills-container">
                <div className="skill">AWS</div>
                <div className="skill">JIRA</div>
                <div className="skill">Github</div>
                <div className="skill">Git</div>
                <div className="skill">xUnit</div>
                <div className="skill">SQL</div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Skills;