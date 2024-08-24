import React, { forwardRef } from 'react'

import BackgroundImageSelf from '../../assets/_DSF0107.JPG'
import './Home.css'
export const Home = forwardRef((props, ref) => (
    // <div ref={ref} className="home">
        <div ref={ref} className="home-background" alt="Logo" 
          style={{
            backgroundImage: `radial-gradient(farthest-side, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 150%), url(${BackgroundImageSelf})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} >

          </div>
      

    // </div>
  )
)
