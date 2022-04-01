import React from "react"
import ProjectCarousel from "../components/ProjectCarousel"
import HeaderProfileCard from "./home/HeaderProfileCard"
import { Wrapper } from "./home/HomeStyles"

export default function Home() {
    return(
        <Wrapper>
            <HeaderProfileCard/>
            
            <ProjectCarousel/>
        </Wrapper> 
    )
}