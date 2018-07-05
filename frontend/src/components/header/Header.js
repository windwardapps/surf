// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends React.Component {
  render() {
    const { links } = this.props;
    return (
      <div name="Header">
        <div className="left">
          <Link to="/">Surf</Link>
          {links.filter(link => !!link.label).map((link, i) => (
            <Link key={i} to={link.url}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="right">right</div>
      </div>
    );
  }
}

export default Header;
