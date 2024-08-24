import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css'

export function Project(props) {
  return (
    <div className="project">
        <div className="project-name">
            {props.projectData.name}
        </div>
        <a className="project-github" href={props.projectData.github} target="_blank" >
        
            <FontAwesomeIcon size="2x" icon={faGithub} />
            {props.projectData.github}
        </a>
        <div className="project-demo">
            {props.projectData["demo-type"] === "iframe" && 
                <iframe
                    src={props.projectData["demo-url"]}
                />
            }
            {props.projectData["demo-type"] === "video" && 
                <video controls
                    src={props.projectData["demo-url"]}
                />
            }
        </div>
        <div className="project-description">
            {props.projectData.description}
        </div>
    </div>
  )
}
