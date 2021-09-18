import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import OtherPage from "./OtherPage";
import Fibonacci from "./Fibonacci";

function App() {
  return (
    <Router>
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/other-page">Other Page</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="app">
        <Switch>
          <Route exact path="/">
            <Fibonacci />
          </Route>

          <Route path="/other-page">
            <OtherPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
