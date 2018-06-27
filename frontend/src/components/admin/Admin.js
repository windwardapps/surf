// @flow

import './Admin.css';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../common/Card';
import Instructors from './instructor/Instructors';
import VideoList from '../video/VideoList';
import { fetchAdminData } from '../../http/admin';
import store from '../../store';

const components = {
  Instructors,
  VideoList
};

type Props = {
  match: Object,
  links: Object[]
};

class Admin extends React.Component<Props, {}> {
  async componentDidMount() {
    const data = await fetchAdminData();
    store.dispatch({ type: 'INIT_ADMIN', data });
  }

  render() {
    const { match, links } = this.props;
    return (
      <div name="Admin">
        <h1>Admin</h1>
        <div className="links">
          <Route
            exact
            path="/admin"
            render={() =>
              links.map((link, i) => (
                <Link key={i} to={link.url}>
                  <Card title={link.label}>
                    <div>{link.label}</div>
                  </Card>
                </Link>
              ))
            }
          />
        </div>
        {links.map((link, i) => (
          <Route
            key={i}
            path={link.url}
            component={components[link.component]}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  links: state.app.links.filter(l => l.url !== ownProps.match.url)
});

export default connect(mapStateToProps)(Admin);
