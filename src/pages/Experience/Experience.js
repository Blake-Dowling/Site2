import React from 'react'
import { Entry } from '../../Components/Entry'
import './Experience.css'
import entries from './Experience.json'

export function Experience() {
  const experienceData = entries
  return (
    <div className="experience">
      Experience

      {experienceData.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
}
