import React from "react"
import { ProjectsContainer, ProjectCard, ProjectText } from "./projectsStyle"
import projectsData from "./projectsData"

let projectsList = projectsData.map(project => {
    return (
        <ProjectCard onClick= {()=> window.open(project.url)} style={{backgroundImage: `url(${project.background})`}} key={project.title} className="projectCard">
            <ProjectText>
                <p>{project.title}</p>
                <p>{project.discription}</p>
            </ProjectText>
        </ProjectCard>
    )
})

export default function Projects() {
    return (
        <ProjectsContainer>
            {projectsList}
        </ProjectsContainer>
    )
}