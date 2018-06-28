// @flow
import * as React from 'react';
import { Route, Link } from 'react-router-dom';

import './Videos.css';

type Props = {
  videos: Object[]
};

type State = {
  myState: string
};

export default class Videos extends React.Component<Props, State> {
  state = {
    myState: ''
  };

  render() {
    return <div name="Videos">Videos</div>;
  }
}
