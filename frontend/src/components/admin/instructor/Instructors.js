// @flow

import './Instructors.css';

import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import InstructorList from './InstructorList';
import InstructorDetail from './InstructorDetail';

type Props = {
  match: Object,
  instructors: Object[]
};

class Instructors extends React.Component<Props, {}> {
  render() {
    const { match, instructors } = this.props;

    return (
      <div name="Instructors">
        <Route
          exact
          path="/admin/instructors"
          render={() => <InstructorList instructors={instructors} />}
        />
        <Route
          path="/admin/instructors/:id"
          render={props => (
            <InstructorDetail
              instructor={instructors.find(
                i => i.id === Number(props.match.params.id)
              )}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  instructors: state.admin.instructors
});

export default connect(mapStateToProps)(Instructors);
