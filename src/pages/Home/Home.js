import React, { forwardRef } from 'react'

import './Home.css'
const selfImageSrc = `${process.env.PUBLIC_URL}/self-image.JPG`
export const Home = forwardRef((props, ref) => (
    <div ref={ref} className="home">
        <img ref={ref} className="home-background" alt="Logo" 
          src={selfImageSrc}
        />
        <div className="home-background-effect"/>
        <div className="color"/>
        <div className="dark"/>
    </div>
  )
)
