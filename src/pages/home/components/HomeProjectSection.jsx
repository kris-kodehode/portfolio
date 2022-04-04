import React from "react"
import ProjectCarousel from "./ProjectCarousel"
import { projects_Text_Paragraph, projects_Text_Title } from "../../../language/en"
import { ProjectsWrapper, ProjectsTextContainer, StyledProjectsTitle, StyledProjectsParagraph } from "./HomeProjectStyles"

export default function HomeProjectSection() {
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