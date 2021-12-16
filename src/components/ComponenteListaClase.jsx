import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.done = props.done;
    this.texto = props.texto;
    this.prioridad = props.prioridad;
    this.setElementClass();
  }

  setElementClass() {
    this.claseLista = this.prioridad;
    if (this.done) {
      this.claseLista += ' el-done';
    } else {
      this.claseLista += ' el-undone';
    }
  }

  setTaskStatus() {
    this.done = !this.done;
  }

  render() {
    return (
      <li className={this.claseLista}>
        <input type="checkbox" onChange={this.setTaskStatus} />
        {this.texto}
      </li>
    );
  }
}

ComponenteListaClase.defaultProps = {
  prioridad: 'baja',
};

export default ComponenteListaClase;
