// @flow
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Header from './components/header/Header';
import Admin from './components/admin/Admin';
import Instructor from './components/instructor/Instructor';
import store from './store';
import { fetchAppData } from './http/app';
import NoMatch from './components/nomatch/NoMatch';

const components = {
  Admin,
  Instructor
};

type Props = {
  user: Object,
  links: Object[]
};

class App extends Component<Props, {}> {
  async componentDidMount() {
    const data = await fetchAppData();
    store.dispatch({ type: 'INIT', data });
  }

  render() {
    const { user, links } = this.props;
    if (!links.length) {
      return null;
    }

    return (
      <Router>
        <div name="App">
          <Header links={links} />
          <div className="main">
            <Switch>
              {links.map((link, i) => (
                <Route
                  key={i}
                  path={link.url}
                  component={components[link.component]}
                />
              ))}
              <Route
                exact
                path="/"
                render={() => (
                  <Redirect
                    to={user.type === 'admin' ? '/admin' : '/instructor'}
                  />
                )}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.app.user,
  links: state.app.links
});

export default connect(mapStateToProps)(App);
