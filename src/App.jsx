import Navbar from './components/Headers/Navbar'
import HeroSection from './components/HeroSection/HeroSections'
import './index.css';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Experience from './components/Experience/Experience';
import Contact from './components/ContactUs/Contact';
function App() {
 

  return (
    <>
     <div className="main">
        <Navbar/>
          <HeroSection/>
     </div>
     <About/>
     <Project/>
     <Experience/>
     <Contact/>
    </>
  )
}

export default App
