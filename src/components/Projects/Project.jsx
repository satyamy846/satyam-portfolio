import './Project.css';
import ChaperoneImg from '../../assets/Chaperone.jpg';
import InterviewConnectImg from '../../assets/InterviewConnect.jpg';
import WeatherAPIImg from '../../assets/Weather_API.jpg';
import QuizzyImg from '../../assets/Quizzy.jpg';

const Project = () => {
    return (
        <>
            <div id="project">
                <div className="project-main-container">
                    <h2>CHECK OUT MY WORK</h2>
                    <h3>{`Here's what I have done with the past`}</h3>
                    <div className="project-cards-container">
                        <div className="card">
                            <img src={ChaperoneImg} alt="chaperone-img" className='project-img' />
                            <div className="card-content">
                                <p>{`Chaperone`}</p>
                                <div className="project-links">
                                    <a href="" className='live-link'><span>Live</span></a>
                                <a href="" className='github-link'><span>Github</span></a>
                                </div>
                            </div>
                            

                        </div>
                        <div className="card">
                        <img src={InterviewConnectImg} alt="interview-connect-img" className='project-img' />
                            <div className="card-content">
                                <p>{`InterviewConnect`}</p>
                                <div className="project-links">
                                    <a href="" className='live-link'><span>Live</span></a>
                                <a href="" className='github-link'><span>Github</span></a>
                                </div>
                            </div>
                           
                           
                        </div>
                        <div className="card">
                        <img src={WeatherAPIImg} alt="weather-api-img" className='project-img' />
                            <div className="card-content">
                                <p>{`Weather App`}</p>
                                <div className="project-links">
                                    <a href="" className='live-link'><span>Live</span></a>
                                <a href="" className='github-link'><span>Github</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <img src={QuizzyImg} alt="quizzy-img" className='project-img' />
                            <div className="card-content">
                                <p>{`Quizzy`}</p>
                                <div className="project-links">
                                    <a href="" className='live-link'><span>Live</span></a>
                                <a href="" className='github-link'><span>Github</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;