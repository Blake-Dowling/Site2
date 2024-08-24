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
  const [headerVisible, setHeaderVisible] = useState(true)
  const [active, setActive] = useState(false)
  const [contactPopup, setContactPopup] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [loaded, setLoaded] = useState(false)
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
      if(new Date() - prevTimeActive >= 3000){
        setActive(false)
      }
    }
    function handleScroll(){
      setCurrentPage(parseInt(window.scrollY/window.innerHeight))

    }

    window.addEventListener('mousemove', handleActive)
    window.addEventListener('scroll', handleActive)
    window.addEventListener('scroll', handleScroll)
    const activeInterval = setInterval(checkActive, 500)
    window.addEventListener('load', setLoaded(true))
    return () => {
      window.removeEventListener('mousemove', handleActive)
      window.removeEventListener('scroll', handleActive)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(activeInterval)
    }
  }, [])

  return (
    <div className={`app${!loaded?" loading":""}`}>
      
      <Header 
        headerVisible={headerVisible}
        setHeaderVisible={setHeaderVisible}
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
      {/* <div className={`top-button${active?"":" inactive"}`} onClick={() => scrollToRef(homeRef)}>Top</div> */}
      {currentPage===0 &&
        <img className={`bottom-button moving${active?"":" inactive"}`} onClick={() => scrollToRef(educationRef)} src={'/down-icon.svg'}></img>
      }
      {currentPage===1 &&
      <>
        <img className={`top-button moving${active?"":" inactive"}${headerVisible?" header-visible":""}`} onClick={() => scrollToRef(homeRef)} src={'/up-icon.svg'}></img>
        <img className={`bottom-button moving${active?"":" inactive"}`} onClick={() => scrollToRef(projectsRef)} src={'/down-icon.svg'}></img>
      </>}
      {currentPage===2 &&
      <>
        <img className={`top-button moving${active?"":" inactive"}${headerVisible?" header-visible":""}`} onClick={() => scrollToRef(educationRef)} src={'/up-icon.svg'}></img>
        <div className={`bottom-button${active?"":" inactive"}`} onClick={() => scrollToRef(homeRef)} >Top</div>
      </>}

    </div>
  );
}

export default App;
