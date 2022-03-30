import React  from "react"
import { Globalstyle } from "./appStyles"
import Home from "./pages/Home"
import Nav from "./components/NavBar"
import Footer from "./components/FooterSection"

export default function App() {

  return (
    <div className="App">
      <Globalstyle/>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  )
}