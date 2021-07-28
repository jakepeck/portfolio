import React from 'react'
// import Skills2 from './Skills2'
// import Skills3 from './Skills3'
import Skills4 from './Skills4'
const About = (props) => {
  return (
    <div className="about" id="about">
      <br />
      <article>
        <h1>About</h1> <hr />
        <h2>Driven By Curiosity.</h2>
        <p>
          I am a full-stack developer based in Chicago. As someone motivated by
          creating solutions to challenging problems, programming has always
          been one of my greatest passions. Whether it was creating new tools
          for trading desks in Chicago, taking coursework at the university, or
          making Xanga layouts in the seventh grade (embarassing, I know),
          coding has always been of great interest to me and has played an
          active role in my life.
        </p>
        <h2>A Strong Teammate - An Even More Formidable Leader.</h2>
        <p>
          I'm supportive of my team's goals and mission and make sure to listen
          to what others have to say. I think of myself as a morale booster and
          try to be the engine powering an outstanding team - no matter how the
          team may be structured. While I add tremendous value as a team member,
          my charisma and interpersonal skills allow me to flourish in roles
          leading teams.{' '}
        </p>
        <h2>Always Pursuing Excellence.</h2>
        <p>
          The pursuit of excellence remains one of my most important values
          throughout my life. I have always, and will always, hold myself to a
          very high standard.
        </p>
      </article>
      {/* <img src="https://i.imgur.com/FuNa3ns.png" alt="heroImg" height="200" width="200"/>  */}
      {/* <article>The feeling of self-servience when you finally
          figure out that bug, or solve that edge-case of the algorithm you are
          having trouble with is is truly undescribable.</article> */}

      {/* <Skills2 /> */}
      {/* <Skills3 />  */}
      {/* <img src="https://i.imgur.com/ZkMGNDu.jpg" alt="heroImg" height="200" width="200"/>  */}
      <Skills4 />
    </div>
  )
}

export default About
