import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  function openNav() {
    document.getElementById('mySidebar').style.width = '35vw'
    document.getElementById('main').style.marginLeft = '35vw'
    document.getElementById('navlinks').style.display = 'revert'
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById('navlinks').style.display = 'none'
    document.getElementById('mySidebar').style.width = '5vw'
    document.getElementById('main').style.marginLeft = '5vw'
  }
  return (
    <div className="App">
      <header>
        <h1>Jake Peck's Portfolio</h1>
        <Nav closeNav={closeNav} openNav={openNav} />
      </header>

      <main id="main">
        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route exact path="/about">
            <About openNav={openNav} />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
