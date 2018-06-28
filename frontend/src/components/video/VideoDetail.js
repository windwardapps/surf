// @flow
import * as React from 'react';

import './VideoDetail.css';

type Props = {
  myProp: string
};

type State = {
  myState: string
};

export default class VideoDetail extends React.Component<Props, State> {
  state = {
    myState: ''
  };

  render() {
    return <div name="VideoDetail">VideoDetail</div>;
  }
}
