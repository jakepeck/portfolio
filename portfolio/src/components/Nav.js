import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default class Nav extends Component {
//   render() {
//     return (
//       <nav className="navbar">
//         <div className="navlinks">
//           <NavLink to="/">Introduction</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/projects">Projects</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <a
//             target="#"
//             href="https://docs.google.com/document/d/1yfFNl3ThyxlHvLQDL653anpUWxS7WxuDTQieI5tmjq8"
//           >
//             Resume
//           </a>
//         </div>
//       </nav>
//     )
//   }
// }

const Nav = (props) => {
  const handleContactNavigation = () => {
    props.closeNav()
    const contactSection = document.getElementById('myFooter')
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsNavHelper = () => {
    const projectSection = document.getElementById('projects-gallery')
    // const sectionStart = projectSection.offsetTop
    const aboutEnd = document.getElementById('about-div').offsetHeight
    const aboutStart = document.getElementById('about-div').offsetTop
    const heroEnd = document.querySelector('.hero').offsetHeight
    const endOfTop = document.querySelector('.myHeader').offsetHeight
    const introDivTop = document.getElementById('intro-div').offsetTop
    const introDivEnd = document.getElementById('intro-div').offsetHeight
    console.log(heroEnd)
    console.log(aboutStart, aboutEnd)
    console.log(endOfTop)
    console.log(introDivTop, introDivEnd)
    let count = aboutStart + introDivEnd + endOfTop + 100
    console.log(count)
    projectSection.scrollIntoView({ top: count, behavior: 'smooth' })
    window.scrollTo({ top: count })
    // console.log(
    //   'project section height',
    //   projectSection.getBoundingClientRect().top
    // )
    // console.log(aboutEnd)
    // console.log(sectionStart)
    // window.scrollTo({ top: aboutEnd - 4000, behavior: 'smooth' })
  }

  const handleProjectsNavigation = (e) => {
    e.preventDefault()
    console.log('handle projects navigation claled')
    props.closeNav()
    handleProjectsNavHelper()
  }

  const handleAboutNavigation = () => {
    props.closeNav()
    const aboutSection = document.getElementById('about-div')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  const handleHomeNavigation = () => {
    const introSection = document.getElementById('intro-div')
    introSection.scrollIntoView({ behavior: 'smooth' })
    props.closeNav()
  }

  const handleResumeNavigation = () => {
    props.closeNav()
    const resumeSection = document.getElementById('resume-div')
    resumeSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="navbar">
      <div id="mySidebar" className="sidebar">
        {/* <a href="javascript:void(0)" class="closebtn" onClick={props.closeNav}>
          &times;
        </a> */}
        <button class="closebtn" onClick={props.closeNav}>
          &times;
        </button>

        {/* <button class="openbtn" onClick={props.openNav}>
          &#9776;
        </button> */}
        <div id="navlinks">
          {/* <NavLink to="/" onClick={props.closeNav}>
            Home
          </NavLink> */}
          <div onClick={handleHomeNavigation}>Home</div>
          <div onClick={handleAboutNavigation}>About</div>
          <div onClick={handleProjectsNavigation}>Projects</div>
          <div onClick={handleResumeNavigation}>Resumé</div>
          <div onClick={handleContactNavigation}>Contact</div>
          <a href="#projects-gallery" onClick={props.closeNav}>
            Projects
          </a>

          {/* <NavLink to="/about" onClick={props.closeNav}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={props.closeNav}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={props.closeNav}>
            Contact
          </NavLink> */}
          {/* <a href="#intro-div" onClick={props.closeNav}>
            Home
          </a>
          <a href="#about-div" onClick={props.closeNav}>
            About
          </a>
          
          <a
            target="#"
            href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/17Q6ZteUgvlzbBXkpvGVyiGLnyHFY5NCXCUxyxl2eJhk/export?format=pdf"
            onClick={props.closeNav}
          >
            Resumé
          </a>
          <a href="#myFooter" onClick={props.closeNav}>
            Contact
          </a> */}

          {/* <a href="#resume-div" onClick={props.closeNav}>
            Resume2
          </a> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
