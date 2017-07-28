import React, { Component } from 'react';
import Terminal from './Terminal';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <Terminal title={this.props.title}>
          <input type="email" placeholder="user@addr.net"/>
        </Terminal>
      </div>
    );
  }
}

export default Signup;
