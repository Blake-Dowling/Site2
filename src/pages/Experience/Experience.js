import React, { forwardRef } from 'react'
import { Entry } from '../../Components/Entry'
import './Experience.css'
import entries from './Experience.json'

const experienceData = entries
export const Experience = forwardRef((props, ref) => (

    <div ref={ref} className="entry-section experience">
      <h1 className="text-item">
        Experience
      </h1>


      {experienceData.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
)
