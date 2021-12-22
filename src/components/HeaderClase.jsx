import React from 'react';

import './header.css';

class HeaderClase extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.personas = props.personas;
    
  }

  render() {
    return (
      <header>
        <h1>{this.title}</h1>
        <select name="usuario">
          <option value="usuario1"></option>
          <option value="usuario2"></option>
          <option value="usuario3"></option>
          <option value="usuario4"></option>
        </select>
      </header>
    );
  }
}

export default HeaderClase;
