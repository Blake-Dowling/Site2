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
import emailjs from '@emailjs/browser'//'emailjs-com'
import { send } from 'emailjs-com';

function scrollToRef(ref){
  ref?.current?.scrollIntoView({ behavior: 'smooth' })
}
let prevTimeActive = new Date()
function App() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const [active, setActive] = useState(false)
  const [contactPopup, setContactPopup] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactFormRef = useRef(null)

  function sendEmail(event){
    event.preventDefault()
    emailjs.sendForm('service_aemqy4g', 'template_3c0182j', event.target, 
    {publicKey: `${process.env.REACT_APP_EMAIL_JS_KEY}`}
    )
    .then(() => {
      setEmailSent(true)
      console.log('SUCCESS!');
    }, (error) => {
      setEmailSent(true)
        console.log('FAILED...', error);
    });
  }
  function handleResize(){
    // console.log(window.innerWidth/ window.innerHeight)
    if(window.innerWidth/ window.innerHeight < 1.2){
      setMobileView(true)
    }
    else{
      setMobileView(false)
    }
  }

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
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleActive)
      window.removeEventListener('scroll', handleActive)
      window.removeEventListener('scroll', handleScroll)
      clearInterval(activeInterval)
      window.removeEventListener('load', setLoaded(true))
      window.removeEventListener('resize', handleResize)
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
      {<Contact 
        ref={contactFormRef}
        contactPopup={contactPopup} 
        setContactPopup={setContactPopup} 
        sendEmail={sendEmail}
        emailSent={emailSent}
      />}
      <div className="page">
        <Home ref={homeRef}/>
        <About aboutRef={aboutRef}/>
      </div>
      <div className="page">
        <Education 
          ref={educationRef}
          mobileView={mobileView}
        />
        <Experience 
          ref={experienceRef}
          mobileView={mobileView}
        />
      </div>

      <Projects ref={projectsRef}/>
      {/* <div className={`top-button${active?"":" inactive"}`} onClick={() => scrollToRef(homeRef)}>Top</div> */}
      {currentPage===0 &&
        <div className={`button bottom${active?"":" inactive"}`} onClick={() => scrollToRef(educationRef)} >
          <img src={`${process.env.PUBLIC_URL}/down-icon.svg`}/>
        </div>
      }
      {currentPage===1 &&
      <>
        <div className={`button top${active?"":" inactive"}${headerVisible?" header-visible":""}`} onClick={() => scrollToRef(homeRef)} >
          <img src={`${process.env.PUBLIC_URL}/up-icon.svg`}/>
        </div>
        <div className={`button bottom${active?"":" inactive"}`} onClick={() => scrollToRef(projectsRef)} >
          <img src={`${process.env.PUBLIC_URL}/down-icon.svg`}/>
        </div>
      </>}
      {currentPage===2 &&
      <>
        <div className={`button top${active?"":" inactive"}${headerVisible?" header-visible":""}`} onClick={() => scrollToRef(educationRef)} >
          <img src={`${process.env.PUBLIC_URL}/up-icon.svg`}/>
        </div>
        <div className={`button bottom${active?"":" inactive"}`} onClick={() => scrollToRef(homeRef)} >Top</div>
      </>}

    </div>
  );
}

export default App;
