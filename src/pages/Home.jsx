import React from "react"
import HomeProjectSection from "./home/components/HomeProjectSection"
import AboutMe from "./home/components/AboutMe"
import HeaderProfileCard from "./home/components/HeaderProfileCard"
import { Wrapper } from "./home/HomeStyles"

export default function Home() {
    return(
        <Wrapper>
            <HeaderProfileCard/>
            <AboutMe/>
            <HomeProjectSection/>
        </Wrapper> 
    )
}