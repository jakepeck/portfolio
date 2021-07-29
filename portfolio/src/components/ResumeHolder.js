import React from 'react'
import resume from '../assets/JakePeck-Resume.pdf'

const ResumeHolder = (props) => {
  return (
    <article className="resumeHolder">
      <h1>Resumé</h1> <hr /> <br />
      <button id="download-resume-button">
        {' '}
        <a
          target="#"
          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/17Q6ZteUgvlzbBXkpvGVyiGLnyHFY5NCXCUxyxl2eJhk/export?format=pdf"
        >
          View My Resumé
        </a>
      </button>
      <iframe
        src={resume}
        width="90%"
        height="1000"
        id="resume-pdf"
        title="jakepeck-resume"
      ></iframe>
    </article>
  )
}

export default ResumeHolder
