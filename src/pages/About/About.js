import React from 'react'
import { Education } from '../Education/Education'
import { Experience } from '../Experience/Experience'
import './About.css'
export function About() {
  return (
      <div className="page about">
        <div>
          Bio
          Blake Dowling is a software engineer at Technology Unlimited Group and a MS CS student at San Diego State University. 
          Areas of Expertise
          Applied Machine Learning, Reinforcement Learning, Full Stack Web Development, Data Structures and Algorithms, Software Engineering
        </div>
        <Education/>
        <Experience/>
      </div>
  )
}
