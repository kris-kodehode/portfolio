import React from "react"
import { nav_Text_Button_Contact, nav_Text_Button_Home, nav_Text_Button_Projects } from "../language/en"
import { Nav, NavBTN } from "./navStyles"

export default function NavBar() {
    return (
        <Nav>
            <NavBTN>{nav_Text_Button_Home}</NavBTN>
            <NavBTN>{nav_Text_Button_Projects}</NavBTN>
            <NavBTN>{nav_Text_Button_Contact}</NavBTN>
        </Nav>
    )
}