import AboutMe from "./components/aboutMe"
import Contact from "./components/contact"
import Education from "./components/education"
import Extra from "./components/extra"
import Header from "./components/header"
import Hobbies from "./components/hobbies"
import Projects from "./components/projects"
import Skills from "./components/skills"

function App() {

  return (
    <>
    <div className = "bg-slate-100 px-3 py-8">
      <div className = "bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header></Header>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
        <Education></Education>
        <Hobbies></Hobbies>
        <Extra></Extra>
        <Contact></Contact>
      </div>
    </div>
    </>
  )
}

export default App
