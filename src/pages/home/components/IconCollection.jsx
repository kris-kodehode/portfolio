import React from "react"
import { IconContainer, Icon } from "./headerProfileCardStyles"

export default function IconCollection() {
    return(
        <IconContainer>
            <Icon className="devicon-html5-plain-wordmark colored"/>
            <Icon className="devicon-css3-plain-wordmark colored"/>
            <Icon className="devicon-javascript-plain colored"/>
            <Icon className="devicon-react-original-wordmark colored"/>
        </IconContainer>
    )
}