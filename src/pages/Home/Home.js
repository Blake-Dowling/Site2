import React from 'react'
import { About } from '..//About/About'
import { Projects } from '../Projects/Projects'
import { Education } from '../Education/Education'
import { Experience } from '../Experience/Experience'
import { Resume } from '../Resume/Resume'
import { Contact } from '../Contact/Contact'
import BackgroundImageSelf from '../../assets/_DSF0107.JPG'
import './Home.css'
export function Home() {
  return (
    <div className="home">
      <div className="page home-first">
        <div className="home-background" alt="Logo" 
          style={{
            backgroundImage: `radial-gradient(farthest-side, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 150%) , url(${BackgroundImageSelf})`,   
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
      </div>
      <About/>
      {/* <Education/>
      <Experience/> */}
      <Projects/>
      {/* <Contact/> */}
    </div>
  )
}
