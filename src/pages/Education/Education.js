import React, { forwardRef } from 'react'
import { Entry } from '../../Components/Entry'
import './Education.css'
import entries from './Education.json'

const educationData = entries
export const Education = forwardRef((props, ref) => (

    <div ref={ref} className="entry-section education">
        <h1 className="text-item">
            Education
        </h1>

      {educationData?.map((entryData) => {return <Entry entryData={entryData}/>})}
    </div>
  )
)
