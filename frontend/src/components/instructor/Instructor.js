// @flow

import './Instructor.css';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../common/Card';
import Certifications from '../certification/Certifications';
import Videos from '../video/Videos';
import { fetchInstructorData } from '../../http/instructor';
import store from '../../store';

const components = {
  Certifications,
  Videos
};

type Props = {
  match: Object,
  links: Object[]
};

class Instructor extends React.Component<Props, {}> {
  async componentDidMount() {
    const data = await fetchInstructorData();
    store.dispatch({ type: 'INIT_INSTRUCTOR', data });
  }

  render() {
    const { match, links } = this.props;
    return (
      <div name="Instructor">
        <h1>Instructor</h1>
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

export default connect(mapStateToProps)(Instructor);
