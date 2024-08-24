import React from 'react'
import './Entry.css'
export function Entry(props){
    return (
  
      <div className="experience-entry">
  
        <div className="entry-left">
          <div className="entry-left-1">
              <img className="entry-icon" src={props.entryData.icon}  />
          </div>
          <div className="entry-left-2">
            <div className="entry-date">
              {props.entryData.date}
            </div>
            <div className="entry-role">
              {props.entryData.role}
            </div>
          </div>
        </div>
  
        <div className="entry-right">
          <div className="entry-right-1">
            <div className="entry-company">
                {props.entryData.company}
              </div>
              <div className="entry-description">
                {props.entryData.description}
              </div>
            </div>
        </div>
      </div>
    )
  }