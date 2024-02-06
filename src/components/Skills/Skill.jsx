import './Skills.css';
const Skills = () => {
    return (
        <>
            <div id="skills">
            <div className="main-skills">
                <h3>Languages and Frameworks</h3>
                <div className="skills-container">
                        <div className="skill"><span>HTML</span></div>
                        <div className="skill"><span>CSS</span></div>
                        <div className="skill"><span>Node JS</span></div>
                        <div className="skill"><span>React JS</span></div>
                        <div className="skill"><span>C++</span></div>
                        <div className="skill"><span>MongoDB</span></div>
                        <div className="skill"><span>Javascript</span></div>
                        <div className="skill"><span>Express Js</span></div>
                </div>
            </div>
            <div className="other-skills">
                <h3>Developer Tools and Frameworks</h3>
                    <div className="skills-container">
                        <div className="skill"><span>AWS</span></div>
                        <div className="skill"><span>JIRA</span></div>
                        <div className="skill"><span>Github</span></div>
                        <div className="skill"><span>Git</span></div>
                        <div className="skill"><span>xUnit</span></div>
                        <div className="skill"><span>SQL</span></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Skills;