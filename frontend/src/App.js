// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Header from './header/Header';
import AdminMain from './admin/AdminMain';
import InstructorMain from './instructor/InstructorMain';

import './App.css';

class App extends Component<{}, {}> {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route path="/admin" component={AdminMain} />
        <Route path="/instructor" component={InstructorMain} />
      </div>
      </Router>
    );
  }
}

export default App;
