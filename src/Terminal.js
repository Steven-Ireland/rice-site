import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends Component {
  render() {
    return (
      <div className="Terminal">
        { this.props.title && <p className = "title"><span># {this.props.title}</span></p> }
        {this.props.children}
      </div>
    );
  }
}

export default Terminal;
