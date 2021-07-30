import React from 'react'

const OverlayNav = (props) => {
  // console.log(headerHeight)
  const handleContactNavigation = () => {
    props.closeOverlayNav()
    const contactSection = document.getElementById('myFooter')
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsNavigation = (e) => {
    e.preventDefault()
    props.closeOverlayNav()
    const projectSection = document.getElementById('projects-gallery')
    projectSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAboutNavigation = (e) => {
    e.preventDefault()
    props.closeOverlayNav()
    const aboutSection = document.getElementById('about-div')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleHomeNavigation = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    props.closeOverlayNav()
  }

  const handleResumeNavigation = (e) => {
    e.preventDefault()
    props.closeOverlayNav()
    const resumeSection = document.getElementById('resume-div')
    resumeSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div id="overlay-nav" className="overlay-jp">
      {/* <button
        id="myCloseBtn"
        className="closebtn"
        onClick={props.closeOverlayNav}
      >
        &times;
      </button> */}

      <button class="closebtn" id="myCloseBtn" onClick={props.closeOverlayNav}>
        &times;
      </button>
      <div className="overlay-content-jp">
        <div onClick={handleHomeNavigation}>Home</div>
        <div onClick={handleAboutNavigation}>About</div>
        <div onClick={handleProjectsNavigation}>Projects</div>
        <div onClick={handleResumeNavigation}>Resumé</div>
        <div onClick={handleContactNavigation}>Contact</div>
      </div>
    </div>
  )
}

export default OverlayNav
