// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import Header from './header/Header';
import Admin from './admin/Admin';
import Instructor from './instructor/Instructor';

import './App.css';

class App extends Component<{}, {}> {
  render() {
    return (
      <Router>
      <div name="App">
        <Header />
        <Route path="/admin" component={Admin} />
        <Route path="/instructor" component={Instructor} />
        <Route exact path="/" render={() => <Redirect to="/admin" />} />
      </div>
      </Router>
    );
  }
}

export default App;
