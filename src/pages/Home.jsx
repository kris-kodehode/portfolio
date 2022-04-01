import React from "react"
import Projects from "./home/components/Projects"
import AboutMe from "./home/components/AboutMe"
import HeaderProfileCard from "./home/components/HeaderProfileCard"
import { Wrapper } from "./home/HomeStyles"

export default function Home() {
    return(
        <Wrapper>
            <HeaderProfileCard/>
            <AboutMe/>
            <Projects/>
        </Wrapper> 
    )
}