import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Contact2 from './Contact2'
// import Projects from './Projects'
// import About from './About'
// import Skills2 from './Skills2'
// import Skills3 from './Skills3'
// import Skills4 from './Skills4'

const Introduction = (props) => {
  const handleContactNavigation = () => {
    const contactSection = document.querySelector('#myFooter')
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsNavigation = () => {
    const projectSection = document.getElementById('projects-gallery')
    projectSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAboutNavigation = () => {
    const aboutSection = document.getElementById('about-div')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeNavigation = () => {
    const resumeSection = document.getElementById('resume-div')
    resumeSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="intro">
      {/* Introduction
      <br /> */}
      {/* <img src="https://i.imgur.com/JRvAPwN.jpg" alt="intropic"></img> */}

      <div className="hero">
        <div>
          <p class="first">Hi there! </p>
        </div>
        <div>
          <p class="second">I'm Jake Peck.</p>
        </div>
        <div>
          <p class="third">Full stack developer.</p>
        </div>

        <div className="pageDivs">
          <div className="pageDiv">
            {/* <NavLink to="/about">About</NavLink> */}
            <div onClick={handleAboutNavigation}>About</div>
          </div>
          <div className="pageDiv">
            {/* <NavLink to="/projects">Projects</NavLink> */}
            <div onClick={handleProjectsNavigation}>Projects</div>
          </div>

          <div className="pageDiv">
            <div onClick={handleResumeNavigation}>Resumé</div>
            {/* <a
              target="#"
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/17Q6ZteUgvlzbBXkpvGVyiGLnyHFY5NCXCUxyxl2eJhk/export?format=pdf"
            >
              Resumé
            </a> */}
          </div>

          <div className="pageDiv">
            {/* <NavLink to="/contact">Contact</NavLink> */}
            <div onClick={handleContactNavigation}>Contact</div>
          </div>
        </div>

        {/* <section class="animation-box">
          <div class="first-text">Hi there.</div>
          <div class="second-text">I'm Jake Peck.</div>
          {/* <div class="third-text"></div> */}
        {/* <div class="fourth-text">Full stack developer.</div> */}
        {/* <div class="fifth-text">Final text, now I am done</div> */}
        {/* </section> */}

        {/* <p className="line-1 anim-typewriter">
          Hi there. I'm Jake Peck. A full stack developer.
        </p> */}
        {/* <div class="fade-in-text">
          <p>Hi there. I'm Jake Peck. A full stack developer.</p>
        </div>

        <div class="fade-in-text2">
          <p></p>
        </div>

        <div class="fade-in-text3">
          <p></p>
        </div> */}
      </div>

      {/* <h1>Hi there. I'm Jake Peck - a full stack developer</h1> */}

      {/* <About/>
        <article><Projects/></article>
        <Skills4/>
        
        <Contact2/> */}
    </div>
  )
}

export default Introduction
