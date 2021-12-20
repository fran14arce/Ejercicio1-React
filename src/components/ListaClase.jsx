import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
import Lista from './Lista';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.listaInicial = [];

    if (this.props.elementos !== undefined) {
      for (let i = 0; i < this.props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={this.props.elementos[i].done}
            texto={this.props.elementos[i].texto}
            prioridad={this.props.elementos[i].prioridad}
          />
        );
      }
    }
    
    this.state = { listaActual: this.listaInicial, 
    valorTextInput: this.valorTextInput,
    valorPrioridadSelect: this.valorPrioridadSelect};
  }

  funcion() {
    this.listaInicial = 
    this.listaInicial.concat(
      <ComponenteListaClase
        texto={valorTextInput.current.value}
        prioridad={valorPrioridadSelect.current.value}
      />
    );
    setListaComponentes(newLista);
    this.valorTextInput.current.value = ''; 
    this.changeStatus();
  }

  changeStatus() {
    this.setState({listaActual: this.listaInicial});
  }

  render() {
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>{this.listaComponentes}</ul>
        <li>
          <input
            ref={this.state.valorTextInput}
            type="text"
            placeholder="Introduce una tarea"
          />
          <br />
          <select name="prioridad" ref={this.state.valorPrioridadSelect}>
            <option value="baja">Prioridad Baja</option>
            <option value="media">Prioridad Media</option>
            <option value="alta">Prioridad Alta</option>
          </select>
          <br />
          <button onClick={this.funcion}>Añadir</button>
        </li>
        <br />
      </div>
    );
  }
}

export default ListaClase;
