// @flow
import * as React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import './CertificationList.css';

type Props = {
  match: Object,
  certifications: Object[]
};

type State = {};

class CertificationList extends React.Component<Props, State> {
  state = {};

  render() {
    const { match, certifications } = this.props;
    return (
      <div name="CertificationList">
        <div>CertificationList</div>
        <div>
          {certifications.map((cert, i) => (
            <div key={i}>
              <Link to={`${match.url}/${cert.id}`}>{cert.name}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(CertificationList);
