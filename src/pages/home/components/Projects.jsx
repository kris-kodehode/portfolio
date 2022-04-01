import React from "react"
import ProjectCarousel from "../../../components/ProjectCarousel"
import { projects_Text_Paragraph, projects_Text_Title } from "../../../language/en"
import { ProjectsWrapper, ProjectsTextContainer, StyledProjectsTitle, StyledProjectsParagraph } from "./ProjectsStyles"

export default function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectsTextContainer>
                <StyledProjectsTitle>
                    {projects_Text_Title}
                </StyledProjectsTitle>
                <StyledProjectsParagraph>
                    {projects_Text_Paragraph}
                </StyledProjectsParagraph>
            </ProjectsTextContainer>
            <ProjectCarousel/>
        </ProjectsWrapper>
    )
}