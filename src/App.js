import { useState, useEffect, useRef } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './Components/Header'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { Education } from './pages/Education/Education'
import { Experience } from './pages/Experience/Experience'
import { Resume } from './pages/Resume/Resume'
import { Contact } from './pages/Contact/Contact'

function scrollToRef(ref){
  ref?.current?.scrollIntoView({ behavior: 'smooth' })
}
let prevTimeActive = new Date()
function App() {
  const [active, setActive] = useState(false)
  const [contactPopup, setContactPopup] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    function handleActive(){
      prevTimeActive = new Date()
      setActive(true)
    }
    function checkActive(){
      if(new Date() - prevTimeActive >= 1000){
        setActive(false)
      }
    }

    window.addEventListener('mousemove', handleActive)
    window.addEventListener('scroll', handleActive)
    const activeInterval = setInterval(checkActive, 500)
    return () => {
      window.removeEventListener('mousemove', handleActive)
      window.removeEventListener('scroll', handleActive)
      clearInterval(activeInterval)
    }
  }, [])

  return (
    <div className="app">

      <Header 
        homeRef={homeRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        scrollToRef={scrollToRef}
        setContactPopup={setContactPopup}
      />
      {<Contact contactPopup={contactPopup} setContactPopup={setContactPopup}/>}
      <div className="page">
        <Home ref={homeRef}/>
        <About aboutRef={aboutRef}/>
      </div>
      <div className="page">
        <Education ref={educationRef}/>
        <Experience ref={experienceRef}/>
      </div>

      <Projects ref={projectsRef}/>
      <div className={`top-button${active?"":" inactive"}`} onClick={() => scrollToRef(homeRef)}>Top</div>


    </div>
  );
}

export default App;
