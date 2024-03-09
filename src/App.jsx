import Navbar from './components/Headers/Navbar'
import HeroSection from './components/HeroSection/HeroSections'
import './index.css';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Experience from './components/Experience/Experience';
import Contact from './components/ContactUs/Contact';
import MainImage from './assets/background.jpg'
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';

function App() {
 

  return (
    <>

    {/* <Navbar/> */}
     <div className="main">
        <div className="main-container">
        <HeroSection/>
        </div>
     </div>
     {/* <About/> */}
     <Project/>
     {/* <Experience/>
     <Education/>
     <Contact/>
     <Footer/> */}
    </>
  )
}

export default App
