// @flow
import React from 'react';

import './Card.css';

class Card extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div name="Card">
        <h2>{title}</h2>
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Card;
