import React  from "react"
import { Globalstyle, StyledApp } from "./appStyles"
import Home from "./pages/Home"
import Nav from "./components/NavBar"
import Footer from "./components/Footer"

export default function App() {

  return (
    <StyledApp>
      <Globalstyle/>
      <Nav/>
      <Home/>
      <Footer/>
    </StyledApp>
  )
}