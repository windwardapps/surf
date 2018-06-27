// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

import './InstructorList.css';

type Props = {
  match: Object,
  instructors: Object[]
};

class InstructorList extends React.Component<Props, {}> {
  render() {
    const { match, instructors } = this.props;
    return (
      <div name="InstructorList">
        <div>InstructorList</div>
        <div>
          {instructors.map((instructor, i) => (
            <div key={i}>
              <Link to={`${match.url}/${instructor.id}`}>
                {instructor.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(InstructorList);
