import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fibonacci from "./Fibonacci";

function App() {
  return (
    <Router>
      <div>
        <header className="App-header">
          <nav>
            <ul>
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

        <div className="App">
          <Switch>
            <Route exact path="/">
              <Fibonacci />
            </Route>

            <Route path="/other-page">
              <OtherPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
