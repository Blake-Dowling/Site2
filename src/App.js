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

function App() {
  const [contactPopup, setContactPopup] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <div className="app">

      <Header 
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        scrollToRef={scrollToRef}
        setContactPopup={setContactPopup}
      />
      {<Contact contactPopup={contactPopup} setContactPopup={setContactPopup}/>}
      {/* {contactPopup && <Contact contactPopup={contactPopup} setContactPopup={setContactPopup}/>} */}
      <Home ref={homeRef}/>
      <div className="page">
        <About ref={aboutRef}/>
        <Education/>
        <Experience/>
      </div>

      <Projects ref={projectsRef}/>



    </div>
  );
}

export default App;
