import React from 'react'
import { Entry } from '../../Components/Entry'
import './Education.css'
import entries from './Education.json'

export function Education() {
  const experienceData = entries
  return (
    <div className="entry-section education">
        <h1 className="text-item">
            Education
        </h1>

      {experienceData?.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
}
