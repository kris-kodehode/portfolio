import React from "react"
import "./home.css"
import bulki from "../images/bulki.png"
import HTML5 from "../images/logos.png"

export default function Home() {
    return (
        <div className="home">
            <img className="profile-img" src={bulki} alt="profile" />
            <div className="text-container">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor pariatur, distinctio commodi ut itaque at suscipit voluptatum provident. Tempora libero mollitia nam porro magni.</h3>
                <img className="logo" src={HTML5} alt="HTML5 Logo" />
            </div>
        </div>
    )
}