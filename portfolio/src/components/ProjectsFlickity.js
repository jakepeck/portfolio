import React from 'react'
// import ProjectCard from './ProjectCard'
import NewProjectCard from './NewProjectCard'
// Technologies leveraged include: PostgreSQL, Python3, Flask, React, React-Redux, ///// Thunk, Node, React-Rainbow'
const ProjectsFlickity = () => {
  const myProjects = [
    {
      name: 'IceCreamSocial',
      githuburl: 'https://github.com/jakepeck/icecreamsocial',
      projecturl: 'https://brave-aryabhata-794751.netlify.app',
      projectimg: 'https://i.imgur.com/ycYSjTn.png',
      projectdesc:
        'A full stack social media web application for chefs, foodies, and social media addicts alike to view community members, create posts and comment on everything regarding the best of the best in dessert.'
    },
    {
      name: 'Barber Booking Buddy',
      githuburl: 'https://github.com/meglhowley/barber-shop',
      projecturl: 'https://infinite-temple-92107.herokuapp.com/',
      projectimg: 'https://i.imgur.com/RA8s4bt.png',
      projectdesc:
        'Full stack PERN (PostgreSQL, Express, React, Node) application that allows users to register, log-in, book and cancel appointments, retrieve basic information about a mock barbershop, as well as post, update, and delete barber reviews.'
    },
    {
      name: 'Happy Hour App',
      githuburl: 'https://github.com/jakepeck/happy-hour-app',
      projecturl: 'https://whispering-oasis-08122.herokuapp.com/',
      projectimg: 'https://i.imgur.com/T0EIHWn.png',
      projectdesc:
        'Full stack MERN (Mongoose, Express, React, Node) application that allows users to post, retrieve, update, and delete information on happy hours around the world.'
    },
    {
      name: 'Go-Fish',
      githuburl: 'https://github.com/jakepeck/go-fish',
      projecturl: 'https://jakepeck-go-fish.surge.sh',
      projectimg: 'https://i.imgur.com/I3IZyR9.png',
      projectdesc:
        'JavaScript implementation of the classic card game Go-Fish. Utilizes DOM manipulation, dynamic element creation and styling, and randomized AI decision making.'
    },
    {
      name: 'Tic-Tac-Toe',
      githuburl: 'https://github.com/jakepeck/u1_hw_tic_tac_toe',
      projecturl: 'https://jakepeck-tic-tac-toe.surge.sh',
      projectimg: 'https://i.imgur.com/bJMqh7e.png',
      projectdesc:
        'One of the oldest games in history. JavaScript implementation of Tic-Tac-Toe. See if you can beat the CPU!'
    }
  ]

  let projectsDisplayed = myProjects.map((project, idx) => (
    // <ProjectCard
    //   // className="gallery-cell"
    //   key={idx}
    //   name={project.name}
    //   projecturl={project.projecturl}
    //   projectimg={project.projectimg}
    //   projectdesc={project.projectdesc}
    //   index={idx}
    // />
    <NewProjectCard
      className="gallery-cell"
      key={idx}
      name={project.name}
      githuburl={project.githuburl}
      projecturl={project.projecturl}
      projectimg={project.projectimg}
      projectdesc={project.projectdesc}
      index={idx}
    />
  ))
  return (
    <div>
      <article>
        <h1>Projects</h1> <hr />
        <div
          className="main-gallery js-flickity"
          data-flickity-options='{ "cellAlign": "center", "contain": true, "wrapAround": true, "resize": true }'
        >
          {projectsDisplayed}
          {/* <div class="gallery-cell">{projectsDisplayed[0]}</div>
          <div class="gallery-cell">{projectsDisplayed[1]}</div> */}
        </div>
      </article>
    </div>
  )
}

export default ProjectsFlickity
