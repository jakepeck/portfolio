import React from 'react'
import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'

const Projects = () => {
  const myProjects = [
    {
      name: 'Happy Hour App',
      projecturl: 'https://whispering-oasis-08122.herokuapp.com/',
      projectimg: 'https://i.imgur.com/T0EIHWn.png',
      projectdesc:
        'Full-stack MERN (Mongoose, Express, React, Node) application that allows users to post, retrieve, update, and delete information on happy hours around the world.'
    },
    {
      name: 'Barber Booking Buddy',
      projecturl: 'https://infinite-temple-92107.herokuapp.com/',
      projectimg: 'https://i.imgur.com/RA8s4bt.png',
      projectdesc:
        'Full-stack MERN (Mongoose, Express, React, Node) application that allows users to post, retrieve, update, and delete information on happy hours around the world.'
    },
    {
      name: 'Go-Fish',
      projecturl: 'https://jakepeck-go-fish.surge.sh',
      projectimg: 'https://i.imgur.com/I3IZyR9.png',
      projectdesc: 'JavaScript implementation of Go-Fish'
    },
    {
      name: 'Tic-Tac-Toe',
      projecturl: 'https://jakepeck-tic-tac-toe.surge.sh',
      projectimg: 'https://i.imgur.com/bJMqh7e.png',
      projectdesc: 'JavaScript implementation of Tic-Tac-Toe'
    }
  ]

  let projectsDisplayed = myProjects.map((project, idx) => (
    <ProjectCard
      key={idx}
      name={project.name}
      projecturl={project.projecturl}
      projectimg={project.projectimg}
      projectdesc={project.projectdesc}
      index={idx}
    />
    // <NewProjectCard
    //   key={idx}
    //   name={project.name}
    //   projecturl={project.projecturl}
    //   projectimg={project.projectimg}
    //   projectdesc={project.projectdesc}
    //   index={idx}
    // />
  ))
  return (
    <div> 
      <h1>Projects</h1> <hr/>
      <div className="projects">
      {projectsDisplayed}
      </div>
    </div>
    
  )
}

export default Projects
