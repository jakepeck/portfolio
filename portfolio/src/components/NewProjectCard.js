import React from 'react'

const NewProjectCard = (props) => {
  let { name, projectdesc, projecturl, projectimg} = props
  console.log(projectimg)
  let bgImg = `url(` + projectimg + `)`
  return (
    <div className="newpc" style={{ backgroundImage: bgImg}}>
      <div className="hidden">
        <a target="#" href={`${projecturl}`}>
          {name}
        </a>{' '}
        <br />
        <p>{projectdesc}</p>

      </div>
      <div className="newpc-title"><h1>{name}</h1></div>
      
    </div>
  )
}

export default NewProjectCard
