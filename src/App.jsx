import React  from "react"
import "./App.css"
import Nav from "./components/nav"
import Home from "./components/home"
import Projects from "./components/projects"

export default function App() {

  let [currentComponent, setCurrentComponent] = React.useState('Home')

  let handleClick = (comp) => {
    setCurrentComponent(comp)
  }

  function getComponent() {
    let component;
    switch (currentComponent) {
      case 'Home':
        component = <Home />;
        break;
      case 'Projects':
        component = <Projects />;
        break;
      default:
        component = <Home />;
    }
    return component;
  }

  return (
    <div className="App">
      <Nav handleClick = {handleClick}/>
      {getComponent()}
    </div>
  )
}