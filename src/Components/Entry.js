import React, { useState, useEffect } from 'react'
import './Entry.css'
export function Entry(props){

    return (
  
      <div className="experience-entry">
  
        <div className="entry-left text-item">
          <div className="entry-left-1">
            {(props.entryData["icon-small"] && props.mobileView) &&
              <img className="entry-icon" src={`${process.env.PUBLIC_URL}${props.entryData["icon-small"]}`}  />
            }
            {(!props.entryData["icon-small"] || !props.mobileView) &&
              <img className="entry-icon" src={`${process.env.PUBLIC_URL}${props.entryData.icon}`}  />
            }
          </div>
          <div className="entry-left-2">
            <h2 className="entry-date">
              {props.entryData.date}
            </h2>
            <text className="entry-role">
              {props.entryData.role}
            </text>
          </div>
        </div>
  
        <div className="entry-right text-item">
          <div className="entry-right-1">
              <h2 className="entry-company">
                {props.entryData.company}
              </h2>
              <text className="entry-description">
                {props.entryData.description}
              </text>
            </div>
        </div>
      </div>
    )
  }