import React, { Component } from 'react';
import './Logo.css';

const logoString = `<p>
     _               _   <br/>
 ___|_|___ ___   ___| |_ <br/>
|  _| |  _| -_|_|_ -|   |<br/>
|_| |_|___|___|_|___|_|_|<br/>
</p>`


class Logo extends Component {
  render() {
    return (
      <div className="Logo" dangerouslySetInnerHTML={{__html: logoString.replace(/ /g, "\u00a0")}}/>
    );
  }
}

export default Logo;
