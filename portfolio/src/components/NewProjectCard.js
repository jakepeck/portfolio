import React from 'react'

const NewProjectCard = (props) => {
  let { name, projectdesc, projecturl, projectimg, githuburl } = props

  let bgImg = `url(` + projectimg + `)`
  return (
    <div className="newpc gallery-cell" style={{ backgroundImage: bgImg }}>
      <div className="newpc-title">
        <h1>{name}</h1>
        <a target="#" href={`${projecturl}`}>
          Deployed Version
        </a>
        {' | '}
        <a target="#" href={`${githuburl}`}>
          Github
        </a>{' '}
        <br />
      </div>

      <div className="project-description">
        <p>{projectdesc}</p>
      </div>
    </div>
  )
}

export default NewProjectCard
