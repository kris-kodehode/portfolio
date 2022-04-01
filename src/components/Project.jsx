import React from "react"
import { ProjectsContainer, ProjectCard, ProjectText, ProjectButtons } from "./projectStyles"
import ProjectArray from "./projectData"

export const projectsList = ProjectArray.map(project => {
    const toGitHub = () => window.open(project.gitHubURL)
    const toHostedWebsite = () => window.open(project.url)
    return (
        // div is for the carousel to work
        <div className="forCarousel">
            <ProjectCard
                style={{ backgroundImage: `url(${project.background})` }}
                key={project.title}>
                <ProjectText>
                    <p>{project.title}</p>
                    {/* <p>{project.discription}</p> */}
                </ProjectText>
                <ProjectButtons>
                    <button onClick={toGitHub}>GitHub</button>
                    <button onClick={toHostedWebsite}>Website</button>
                </ProjectButtons>
            </ProjectCard>
        </div>
    )
})

export default function Project() {
    return (
        <ProjectsContainer>
            {projectsList}
        </ProjectsContainer>
    )
}