import React from "react"
import "./nav.css"

export default function Nav(props) {

    return (
        <div className="nav">
            <div className="navButtons">
                <button onClick={() => props.handleClick("Home")}>Home</button>
                <button onClick={() => props.handleClick("Projects")}>Projects</button>
                <button >Contact</button>
            </div>
        </div>
    )
}