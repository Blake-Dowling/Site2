import React from 'react'
import { Project } from './Project'
import './Projects.css'
import projects from './Projects.json'
export function Projects() {
  let projectData = projects
  // if(projectData.length){
  //   projectData = [projectData[0]]
  // }
  return (
    <div className="page projects">
      Projects
      <div className="projects-scroller">
        <div className="projects-spacer"/>
        {projectData?.map(projectData => {return <Project projectData={projectData} />})}
        <div className="projects-spacer"/>
      </div>
    </div>
  )
}
