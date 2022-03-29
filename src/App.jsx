import React  from "react"
import "./App.css"
import Home from "./pages/Home"
import Nav from "./components/Nav"

export default function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  )
}