import React, {forwardRef} from 'react'
import './About.css'
export const About = forwardRef((props, ref) => (
      <div ref={ref} className="entry-section about">
        {/* <h1 className="text-item">
          Bio
        </h1> */}
        <text className="text-item about-description">
          Blake Dowling is a software engineer at Technology Unlimited Group and a MS CS student at San Diego State University. 
          His areas of expertise include 
          applied machine learning, reinforcement learning, full stack web development, data structures and algorithms, and software engineering.
        </text>

      </div>
  )
)
