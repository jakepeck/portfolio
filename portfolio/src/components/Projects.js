import React from 'react'
import ProjectCard from './ProjectCard'
// import NewProjectCard from './NewProjectCard'

const Projects = () => {
  const myProjects = [
    {
      name: 'IceCreamSocial',
      projecturl: 'https://brave-aryabhata-794751.netlify.app',
      projectimg: 'https://i.imgur.com/ycYSjTn.png',
      projectdesc:
        'A full stack social media web application for chefs, foodies, and social media addicts alike to view community members, create posts and comment on everything regarding the best of the best in dessert. Technologies leveraged include: PostgreSQL, Python3, Flask, React, React-Redux, Thunk, Node, React-Rainbow'
    },
    {
      name: 'Barber Booking Buddy',
      projecturl: 'https://infinite-temple-92107.herokuapp.com/',
      projectimg: 'https://i.imgur.com/RA8s4bt.png',
      projectdesc:
        'Full stack PERN (PostgreSQL, Express, React, Node) application that allows users to register, log-in, book and cancel appointments, retrieve basic information about a mock barbershop, as well as post, update, and delete barber reviews.'
    },
    {
      name: 'Happy Hour App',
      projecturl: 'https://whispering-oasis-08122.herokuapp.com/',
      projectimg: 'https://i.imgur.com/T0EIHWn.png',
      projectdesc:
        'Full stack MERN (Mongoose, Express, React, Node) application that allows users to post, retrieve, update, and delete information on happy hours around the world.'
    },
    {
      name: 'Go-Fish',
      projecturl: 'https://jakepeck-go-fish.surge.sh',
      projectimg: 'https://i.imgur.com/I3IZyR9.png',
      projectdesc: 'JavaScript implementation of the classic card game Go-Fish.'
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
      <article>
        <h1>Projects</h1> <hr />
        <div className="projects">{projectsDisplayed}</div>
      </article>
    </div>
  )
}

export default Projects
