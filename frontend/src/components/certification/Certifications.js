// @flow

import './Certifications.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CertificationList from './CertificationList';
import CertificationDetail from './CertificationDetail';

type Props = {
  match: Object,
  certifications: Object[]
};

type State = {};

class Certifications extends React.Component<Props, State> {
  state = {};

  render() {
    const { match, certifications } = this.props;

    return (
      <div name="Certifications">
        <Route
          exact
          path="/instructor/certifications"
          render={() => <CertificationList certifications={certifications} />}
        />
        <Route
          path="/instructor/certifications/:id"
          render={props => (
            <CertificationDetail
              certification={certifications.find(
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
  certifications: state.instructor.certifications
});

export default connect(mapStateToProps)(Certifications);
