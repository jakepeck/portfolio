// import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
// import Nav from './components/Nav'
import About from './components/About'
// import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact2 from './components/Contact2'
import OnePage from './components/OnePage'
import Footer from './components/Footer'
import OverlayNav from './components/OverlayNav'

const App = () => {
  function openNav() {
    document.getElementById('mySidebar').style.width = '100vw'
    document.getElementById('main').style.marginLeft = '100vw'
    document.getElementById('navlinks').style.display = 'revert'
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  // function closeNav() {
  //   document.getElementById('navlinks').style.display = 'none'
  //   document.getElementById('mySidebar').style.width = '0vw'
  //   document.getElementById('main').style.marginLeft = '0vw'
  // }

  const openOverlayNavigation = () => {
    document.getElementById('overlay-nav').style.width = '100%'
  }
  const closeOverlayNavigation = () => {
    document.getElementById('overlay-nav').style.width = '0%'
  }

  const scrollToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div className="App">
      <header className="myHeader">
        {/* <a href="https://www.jakepeck.dev">
          <h1>Jake Peck</h1>
        </a> */}
        <div onClick={scrollToTopOfPage}>
          <h1>Jake Peck</h1>
        </div>
        {/* <button id="myOpenBtn" class="openbtn" onClick={openNav}>
          &#9776;
        </button>
        <Nav closeNav={closeNav} openNav={openNav} /> */}
        <button
          id="myOverlayOpenBtn"
          class="overlayopenbtn"
          onClick={openOverlayNavigation}
        >
          &#9776;
        </button>
        <OverlayNav
          closeOverlayNav={closeOverlayNavigation}
          openOverlayNav={openOverlayNavigation}
        />
      </header>

      <main id="main">
        <Switch>
          <Route exact path="/">
            {/* <Introduction /> */}
            <OnePage />
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
          <Route exact path="/onepage">
            <OnePage />
          </Route>
        </Switch>
      </main>

      <Footer></Footer>

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
