import React from 'react'

const ProjectCard = (props) => {
  let { name, projectdesc, projecturl, projectimg } = props
  return (
    <div className="projectCardC">
      <img src={`${projectimg}`} alt="projectImage" width="200" /> <br/>
      <a target="#" href={`${projecturl}`}>
        {name}
      </a>{' '}
      <p>{projectdesc}</p>
    </div>
  )
}

export default ProjectCard
