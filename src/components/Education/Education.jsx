import './Education.css';

const education = [
    {
        college_name:"Feroze Gandhi Institute of Engineering & Technology",
        session:"July 2019 - July 2023",
        degree:"Bachelors of Technology(CSE)",
        education_detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsa.?"
    },
    {
        college_name:"Kendriya Vidyalaya",
        session:"April 2017 - Oct 2018",
        degree:"Intermediate(12th)",
        education_detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsa.?"
    },
    {
        college_name:"Kendriya Vidyalaya",
        session:"April 2015 - Oct 2017",
        degree:"High School(10th)",
        education_detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsa.?"
    },
]


const Education = ()=>{
    return (
        <>
            <div id="education">
                <h2 className='education-heading'>EDUCATION</h2>
                <div className="education-container">
                    {
                        education.map((item,index) => (
                            <>
                                <div className="education-detail" key={index}>
                                    <div className="education-detail-heading">
                                        <h4 className="education-name">{item.college_name}</h4>
                                        <span className="education-session">{item.session}</span>
                                    </div>
                                    <div className="education-content">
                                        <p className="education-degree">Degree: {item.degree}</p>
                                        <p className="education-name-description">{item.education_detail}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Education;