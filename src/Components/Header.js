import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Header.css'
let lastScrollY = 0
export function Header(props) {

    const [dark, setDark] = useState(false)
    useEffect(() => {
        function handleScroll(){
            if(window.scrollY === 0){
                setDark(false)
            }
            else{
                setDark(true)
            }
            if(window.scrollY === 0 || window.scrollY < lastScrollY){
                props.setHeaderVisible(true)
            }
            else{
                props.setHeaderVisible(false)
            }
            lastScrollY = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <div className={`header${!props.headerVisible?" hidden":props.headerVisible?" visible":""}${!dark?" light":dark?" dark":""}`}>
        <div className="header-name">
            <div to="/" className="link" onClick={() => props.scrollToRef(props.homeRef)}>
                <span className="header-name-text">
                Blake Dowling
                </span>
            </div>
        </div>
    
        <nav >
            <ul className="nav-list">
                <li><div to="/about" onClick={() => props.scrollToRef(props.aboutRef)}>About</div></li>
                <li><div to="/projects" onClick={() => {props.scrollToRef(props.projectsRef)}}>Projects</div></li>
                <li><div to="/experience" onClick={() => {props.scrollToRef(props.educationRef)}}>Experience</div></li>
                <li><div to="/resume" >Resume</div></li>
                <li><div to="/contact" onClick={() => props.setContactPopup(prevContactPopup => {return !prevContactPopup})}>Contact</div></li>
            </ul>
        </nav>  
        <div className="social">
            <FontAwesomeIcon size="2x" icon={faLinkedin}/>
            <FontAwesomeIcon size="2x" icon={faGithub} />
        </div>
    </div>
  )
}
