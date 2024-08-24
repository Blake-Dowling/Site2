import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'
export function Header(props) {
  return (
    <div className="header">
        <div className="header-name">
            <Link to="/" className="link">
                <span className="header-name-text">
                Blake Dowling
                </span>
            </Link>
        </div>
    
        <nav >
            <ul className="nav-list">
                <li><div to="/about" >About</div></li>
                <li><div to="/projects" >Projects</div></li>
                <li><div to="/experience" >Experience</div></li>
                <li><div to="/resume" >Resume</div></li>
                <li><div to="/contact" onClick={() => props.setContactPopup(prevContactPopup => {return !prevContactPopup})}>Contact</div></li>
                {/* <li><Link to="/about" >About</Link></li>
                <li><Link to="/projects" >Projects</Link></li>
                <li><Link to="/experience" >Experience</Link></li>
                <li><Link to="/resume" >Resume</Link></li>
                <li><Link to="/contact" >Contact</Link></li> */}
            </ul>
        </nav>  
        <div className="social">
            <FontAwesomeIcon size="2x" icon={faLinkedin}/>
            <FontAwesomeIcon size="2x" icon={faGithub} />
        </div>
    </div>
  )
}
