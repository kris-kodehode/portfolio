import React from "react"
import { ProjectCard, ProjectText, ProjectButtons } from "./projectsStyle"
import { StyledSlider } from "./projectsStyle"
import projectsData from "./projectsData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const projectsList = projectsData.map(project => {
    const toGitHub = () => window.open(project.gitHubURL)
    const toHostedWebsite = () => window.open(project.url)
    return (
        <div>
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

const settings = {
    focusOnSelect:true,
    arrows:false,
    variableWidth:true,
    centerPadding: -100,
    centerMode:true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export default function ProjectCarousel() {

    return (
        <StyledSlider {...settings}>
            {projectsList}
        </StyledSlider>
    )
}