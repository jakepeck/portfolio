import React from 'react'

const ProjectCard = (props) => {
  let { name, projectdesc, projecturl, projectimg } = props
  return (
    <div className="projectCard">
      <img src={`${projectimg}`} alt="projectImage" width="200" /> <br />
      <br />
      <a target="#" href={`${projecturl}`}>
        {name}
      </a>{' '}
      <br />
      <p>{projectdesc}</p>
    </div>
  )
}

export default ProjectCard
