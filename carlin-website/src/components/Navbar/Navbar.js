import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import SimpleTabs from '../Excerpts/Excerpts'
import QuoteCarousel from '../QuoteCarousel/QuoteCarousel';
import About from '../About/About';
import Sounds from '../Sounds/Sounds';
import './Navbar.css';
// import logo from '../../images/logo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <div class="logo">
                {/* <img src={logo}  alt="logo" /> */}
                <p>Codereese</p>
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
                <li>
                  <Link to="/quotes">Quotes</Link>
                </li>
                <li>
                  <Link to="/sounds">Sound Clips</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/excerpts">
                <SimpleTabs />
              </Route>
              <Route path="/quotes">
                <QuoteCarousel />
              </Route>
              <Route path="/media">
                <ImageCarousel />
              </Route>
              <Route>
                <Sounds />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Navbar;