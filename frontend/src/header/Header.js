import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

class Header extends React.Component {
  
  render() {
    return (
      <div name="Header">
        <div className="left">
          <div>Surf</div>
          <Link to="/feature-1">Feature 1</Link>
        </div>
        <div className="right">
          right
        </div>
      </div>
    );
  }

}

export default Header;
