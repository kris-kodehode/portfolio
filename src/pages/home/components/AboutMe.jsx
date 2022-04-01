import React from "react"
import { aboutme_Text_Paragraph, aboutme_Text_Title } from "../../../language/en"
import { AboutMeContainer, AboutMeParagraph, AboutMeTitle } from "./AboutMeStyles"

export default function AboutMe() {
    return (
        <AboutMeContainer>
            <AboutMeTitle>
                {aboutme_Text_Title}
            </AboutMeTitle>
            <AboutMeParagraph>
                {aboutme_Text_Paragraph}
            </AboutMeParagraph>
        </AboutMeContainer>
    )
}