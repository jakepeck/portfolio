import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact2 from './Contact2'
import Projects from './Projects'
import About from './About'
import Skills2 from './Skills2'
import Skills3 from './Skills3'
import Skills4 from './Skills4'

const Introduction = () => {
  return (
    <div className="intro">
      {/* Introduction
      <br /> */}
      <img src="https://i.imgur.com/JRvAPwN.jpg"></img>
      <h1>Hi there. I'm Jake Peck - a fullstack developer</h1>
      <div className="pageDivs">
        <div className="pageDiv">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="pageDiv">
          <NavLink to="/projects">Projects</NavLink>
        </div>
        
        <div className="pageDiv">
          <a
            target="#"
            href="https://docs.google.com/document/d/1yfFNl3ThyxlHvLQDL653anpUWxS7WxuDTQieI5tmjq8"
          >
            Resume
          </a>
        </div>
        <div className="pageDiv">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        
      </div>
      {/* <About/>
        <article><Projects/></article>
        <Skills4/>
        
        <Contact2/> */}
    </div>
  )
}

export default Introduction
