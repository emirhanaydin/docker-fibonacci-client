import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fibonacci from "./Fibonacci";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/other-page">Other Page</Link>
        </header>

        <div>
          <Route exact path="/" component={Fibonacci} />
          <Route path="/other-page" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
