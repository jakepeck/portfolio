import React from 'react'
// import Contact2 from './Contact2'

const Footer = (props) => {
  return (
    <div id="myFooter">
      <div className="icon-text-pair">
        <a target="#" href="https://linkedin.com/in/jake-peck">
          <i class="devicon-linkedin-plain " />
        </a>
        <a target="#" href="https://linkedin.com/in/jake-peck">
          LinkedIn
        </a>
      </div>
      <div className="icon-text-pair">
        <a target="#" href="https://github.com/jakepeck">
          <i class="devicon-github-original "> </i>
        </a>
        <a target="#" href="https://github.com/jakepeck">
          Github
        </a>
      </div>
      <p className="footer-text">jakepeck44@gmail.com</p>{' '}
      <p className="footer-text">@ 2021 Created By Jake Peck</p>
      {/* <p className="footer-text">734-277-5410</p> */}
    </div>
  )
}

export default Footer
