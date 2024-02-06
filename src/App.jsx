import Navbar from './components/Headers/Navbar'
import HeroSection from './components/HeroSection/HeroSections'
import './index.css';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Experience from './components/Experience/Experience';
import Contact from './components/ContactUs/Contact';
import MainImage from './assets/background.jpg'
import Footer from './components/Footer/Footer';
function App() {
 

  return (
    <>
     <div className="main">
        {/* <img src={MainImage} alt=""  className='main-image'/> */}
        <div className="main-container">
       
        </div>
        <div className="content-container">
          <Navbar/>
          <HeroSection/>
        </div>
     </div>
     <About/>
     <Project/>
     {/* <Experience/>
     <Contact/> */}
     <Footer/>
    </>
  )
}

export default App
