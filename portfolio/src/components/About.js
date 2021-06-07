import React from 'react'

const About = (props) => {
  return (
    <div>
      About
      <button class="openbtn" onClick={props.openNav}>
        &#9776; Open Sidebar
      </button>
    </div>
  )
}

export default About
