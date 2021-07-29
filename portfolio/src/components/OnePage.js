import React from 'react'

import Introduction from './Introduction'
import About from './About'
// import Projects from './Projects'
import ResumeHolder from './ResumeHolder'
import ProjectsFlickity from './ProjectsFlickity'
// import Contact2 from './Contact2'

const OnePage = (props) => {
  // const handleContactNavigation = () => {
  //   const contactSection = document.getElementById('contact-div')
  //   contactSection.scrollIntoView()
  // }

  // const handleProjectsNavigation = () => {
  //   const projectsSection = document.getElementById('projects-div')
  //   projectsSection.scrollIntoView()
  // }

  // const handleAboutNavigation = () => {
  //   const aboutSection = document.getElementById('about-div')
  //   aboutSection.scrollIntoView()
  // }

  return (
    <div>
      {/* <a href="#intro-component">Scroll To Intro</a>
      <a href="#about-component">Scroll To About</a>
      <a href="#projects-component">Scroll To Projects</a>
      <a href="#contact-component">Scroll To Contact</a>
      <input
        type="button"
        onClick="document.getElementById('about-component').scrollIntoView();"
      />
      <button
        onClick={() =>
          document.getElementById('intro-component').scrollIntoView()
        }
      >
        Scroll To Intro
      </button> */}
      {/* <button onClick={handleAboutNavigation}>Scroll To About</button>
      <button onClick={handleProjectsNavigation}>Scroll To Projects</button>
      <button onClick={handleContactNavigation}>Scroll To Contact</button> */}
      <div id="intro-div">
        <Introduction />
      </div>
      <div id="about-div">
        <About />
      </div>
      {/* <div id="projects-div">
        <Projects />
      </div> */}

      <div id="projects-gallery">
        <ProjectsFlickity />
      </div>
      <div id="resume-div">
        <ResumeHolder />
      </div>
      {/* <div id="contact-div">
        <Contact2 />
      </div> */}
    </div>
  )
}

export default OnePage
