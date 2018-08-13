import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello, world!</h1>
          <Link to="/foo/baz/modal">show me a modal!</Link>
          <Link to="/foo/baz/not-a-modal">show me not-a-modal!</Link>
          <Link to="/">clear</Link>
          <Switch>
            <Route path="/foo/*">
              <Switch>
                <Route path="/foo/*/modal">
                  <h2>foo modal</h2>
                </Route>
                <Route path="/foo/*/not-a-modal">
                  <h2>foo not-a-modal</h2>
                </Route>
              </Switch>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
