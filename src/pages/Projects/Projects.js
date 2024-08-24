import React, { forwardRef } from 'react'
import { Project } from './Project'
import './Projects.css'
import projects from './Projects.json'
let projectData = projects
export const Projects = forwardRef((props, ref) => (
  
  // if(projectData.length){
  //   projectData = [projectData[0]]
  // }

    <div ref={ref} className="page projects">
      <h1 className="text-item">
        Projects
      </h1>
      <div className="projects-scroller">
        <div className="projects-spacer"/>
        {projectData?.map(projectData => {return <Project projectData={projectData} />})}
        <div className="projects-spacer"/>
      </div>
    </div>
  )
)
