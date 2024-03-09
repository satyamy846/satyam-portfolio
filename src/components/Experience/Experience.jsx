import './Experience.css';

const experiences = [
    {
        company_name: "Monotype",
        duration: "May 2023 - Oct 2023",
        position: "Software Engineer Trainee",
        experience_detail_lists: [
            `Worked in a live desktop app project within the industry, gained hands-on experience in
            node.js, vue.js and C# programming(Akka.NET).`,

            `Contributed to a Web API project by implementing changes to controller, 
            services and optimized database queries for notableby 10% performance boost.`,

            `Worked on auto-detection font management desktop application for seamless 
            integration with Adobe applications plugins likeIllustrator Indesign, and Photoshop. 
            Enabled effortless font detection and auto activation of plugins, ensuring a streamlined
            user experience.`
        ]
    },
    {
        company_name: "Fynd Academy",
        duration: "Dec 2022 - March 2023",
        position: "Full Stack Developer Intern",
        experience_detail_lists: [
            `Worked on MEVN Stack project from scratch with robust error handling and secure authentication`,

            `Assisted students in resolving technical doubts and debugging issues`,

            `Collaborated with the team to enhance the Full Stack Development course curriculum`
        ]
    },
]

const Experience = () => {
    return (
        <>
            <div id="experience">
                <h2 className='experience-heading'>MY WORK EXPERIENCE</h2>
                <div className="experience-container">
                    {
                        experiences.map((item,index) => (
                            <>
                                <div className="experience-detail" key={index}>
                                    <h4 className="experience-title">{item.company_name}</h4>
                                    <span className="experience-sub-title">{item.duration}</span>
                                    <p className="experience-position">Role: {item.position}</p>
                                    <ul className='experience-description__wrapper'>
                                        {
                                            item.experience_detail_lists.map((i, idx)=> (
                                                <>
                                                    <li key={idx}>{i}</li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Experience;