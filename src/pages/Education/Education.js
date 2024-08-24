import React from 'react'
import { Entry } from '../../Components/Entry'
import './Education.css'
import entries from './Education.json'

export function Education() {
  const experienceData = entries
  return (
    <div className="education">Education

      {experienceData?.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
}
