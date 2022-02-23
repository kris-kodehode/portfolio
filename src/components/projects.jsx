import React from "react"
import "./projects.css"
import projectsData from "./projectsData"

export default function Projects() {

    let projectsList = projectsData.map(item => {
        return (
            <div onClick= {()=> window.open(item.url)} style={{backgroundImage: `url(${item.background})`}} key={item.title} className="project-container">
                <div className="project-text">
                    <p>{item.title}</p>
                    <p>{item.discription}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
                {projectsList}
        </div>
    )
}