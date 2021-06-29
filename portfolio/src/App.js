// import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact2 from './components/Contact2'

const App = () => {
  function openNav() {
    document.getElementById('mySidebar').style.width = '100vw'
    document.getElementById('main').style.marginLeft = '100vw'
    document.getElementById('navlinks').style.display = 'revert'
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById('navlinks').style.display = 'none'
    document.getElementById('mySidebar').style.width = '0vw'
    document.getElementById('main').style.marginLeft = '0vw'
  }
  return (
    <div className="App">
      <header className="myHeader">
        <h1>Jake Peck</h1>
        <button id="myOpenBtn" class="openbtn" onClick={openNav}>
          &#9776;
        </button>
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
            <Contact2 />
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
