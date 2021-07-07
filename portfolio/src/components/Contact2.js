import React from 'react'

const Contact2 = () => {
  return (
    <div className="contactDetails" id="contact">
      <h1>Contact</h1> <hr />
      <div className="contactInfo">
        <div>
          {' '}
          <p>
            <i class="devicon-linkedin-plain "></i>
            <a target="#" href="https://linkedin.com/in/jake-peck">
              LinkedIn
            </a>
          </p>
          <p>
            <i class="devicon-github-original "></i>
            <a target="#" href="https://github.com/jakepeck">
              Github
            </a>
          </p>{' '}
          <p>
            <i class="devicon-twitter-original "></i>
            <a target="#" href="https://twitter.com/realjakepeck">
              Twitter
            </a>
          </p>
          <p>
            <i class="far fa-file"></i>
            <a
              target="#"
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/17Q6ZteUgvlzbBXkpvGVyiGLnyHFY5NCXCUxyxl2eJhk/export?format=pdf"
            >
              Resume
            </a>
          </p>
        </div>
        <div>
          <p>
            <i class="fas fa-envelope-square"></i>jakepeck44@gmail.com
          </p>
          <p>
            <i class="fas fa-phone-square-alt"></i>734-277-5410
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact2
