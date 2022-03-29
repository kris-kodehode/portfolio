import React from "react"
import { ProjectCard, ProjectText, ProjectButtons } from "./projectsStyle"
import projectsData from "./projectsData"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const toGitHub = () => window.open(project.gitHubURL)
const toHostedWebsite = () => window.open(project.url)

const projectsList = projectsData.map(project => {
    return (
        <ProjectCard
            style={{ backgroundImage: `url(${project.background})` }}
            key={project.title}>
            <ProjectText>
                <p>{project.title}</p>
                <p>{project.discription}</p>
            </ProjectText>
            <ProjectButtons>
                <button onClick={toGitHub}>GitHub</button>
                <button onClick={toHostedWebsite}>Website</button>
            </ProjectButtons>
        </ProjectCard>
    )
})

export default function ProjectCarousel() {

    return (
        <Carousel showStatus={false} showThumbs={false} width={550} centerMode emulateTouch>
            {projectsList}
        </Carousel>
    )
}