import React from 'react';
import Card from '../common/Card';

import './Instructor.css';

class Instructor extends React.Component {
  
  render() {
    return (
      <div name="Instructor">
        <h1>Instructor</h1>
        <div>
          <h2>News</h2>
          <Card title="Item 1">
            <div>Item 1 content</div>
          </Card>
          <Card title="Item 2">
            <div>Item 2 content</div>
          </Card>
          <Card title="Item 3">
            <div>Item 3 content</div>
          </Card>
        </div>
        <div>
          <h2>Action Items</h2>
          <Card title="Item 1">
            <div>Item 1 content</div>
          </Card>
          <Card title="Item 2">
            <div>Item 2 content</div>
          </Card>
          <Card title="Item 3">
            <div>Item 3 content</div>
          </Card>
        </div>
      </div>
    );
  }

}

export default Instructor;
