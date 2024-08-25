import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Project.css'

export function Project(props, ref) {
  return (
    <div className="project">
        <h2 className="text-item project-name">
            {props.projectData.name}
        </h2>
        <div className="text-item">
            <a href={props.projectData.github} target="_blank" >
                <FontAwesomeIcon size="2x" icon={faGithub} />
                {props.projectData.github}
            </a>
        </div>
        <div className="project-demo">
            {props.projectData["demo-type"] === "iframe" && 
                <iframe
                    src={props.projectData["demo-url"]}
                />
            }
            {props.projectData["demo-type"] === "video" && 
                <video controls
                    src={`${process.env.PUBLIC_URL}${props.projectData["demo-url"]}`}
                />
            }
        </div>
        <div className="text-item">
            <text >
                {props.projectData.description}
            </text>
        </div>
    </div>
  )
}
