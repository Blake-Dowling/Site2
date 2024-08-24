import React from 'react'
import { Entry } from '../../Components/Entry'
import './Experience.css'
import entries from './Experience.json'

export function Experience() {
  const experienceData = entries
  return (
    <div className="entry-section experience">
      <h1 className="text-item">
        Experience
      </h1>


      {experienceData.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
}
