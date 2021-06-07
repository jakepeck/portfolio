import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// export default class Nav extends Component {
//   render() {
//     return (
//       <nav className="navbar">
//         <div className="navlinks">
//           <NavLink to="/">Introduction</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/projects">Projects</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <a
//             target="#"
//             href="https://docs.google.com/document/d/1yfFNl3ThyxlHvLQDL653anpUWxS7WxuDTQieI5tmjq8"
//           >
//             Resume
//           </a>
//         </div>
//       </nav>
//     )
//   }
// }

const Nav = (props) => {
  return (
    <nav className="navbar">
      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={props.closeNav}>
          &times;
        </a>
        <button class="openbtn" onClick={props.openNav}>
          &#9776;
        </button>
        <div id="navlinks">
          <NavLink to="/">Introduction</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a
            target="#"
            href="https://docs.google.com/document/d/1yfFNl3ThyxlHvLQDL653anpUWxS7WxuDTQieI5tmjq8"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
