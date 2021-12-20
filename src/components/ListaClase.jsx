import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';
import Lista from './Lista';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.listaInicial = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
    this.valorTextInput = useRef();
    this.valorPrioridadSelect = useRef();
    this.state = { listaActual: this.listaInicial, 
    valorTextInput: this.valorTextInput,
    valorPrioridadSelect: this.valorPrioridadSelect};
  }

  funcion() {
    this.listaInicial = 
    listaComponentes.concat(
      <ComponenteListaClase
        texto={valorTextInput.current.value}
        prioridad={valorPrioridadSelect.current.value}
      />
    );
    setListaComponentes(newLista);
    valorTextInput.current.value = ''; 
    this.changeStatus();
  }

  changeStatus() {
    this.setState({listaActual: this.listaInicial});
  }

  render() {
    return (
      <div>
        {props.titulo} - {props.icono}
        <ul>{listaComponentes}</ul>
        <li>
          <input
            ref={valorTextInput}
            type="text"
            placeholder="Introduce una tarea"
          />
          <br />
          <select name="prioridad" ref={valorPrioridadSelect}>
            <option value="baja">Prioridad Baja</option>
            <option value="media">Prioridad Media</option>
            <option value="alta">Prioridad Alta</option>
          </select>
          <br />
          <button onClick={funcion}>Añadir</button>
        </li>
        <br />
      </div>
    );
  }
}

export default ListaClase;
