import styles from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Excerpts from "./components/Excerpts/Excerpts";
import About from "./components/About/About";
import Quotes from "./components/Quotes/Quotes";
import Media from "./components/Media/Media";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <div>
          <nav>
            <div className={styles.title}>
              <p>George Carlin Tribute</p>
            </div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/excerpts">Excerpts</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Quotes />
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/excerpts">
              <Excerpts />
            </Route>
            {/* <Route path="/quotes">
              <Quotes />
            </Route> */}
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
