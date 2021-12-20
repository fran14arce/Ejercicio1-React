import React, { useState, useRef } from 'react';

import ComponenteLista from './ComponenteLista';
import ComponenteListaClase from './ComponenteListaClase';

export default function Lista(props) {
  //Se crea la lista inicial
  const listaInicial = [];

  //Se rellena la lista inicial
  if (props.elementos !== undefined) {
    for (let i = 0; i < props.elementos.length; i++) {
      listaInicial.push(
        <ComponenteListaClase
          done={props.elementos[i].done}
          texto={props.elementos[i].texto}
          prioridad={props.elementos[i].prioridad}
        />
      );
    }
  }

  /*Se inicializa el estado con la lista inicial (ya incluidos
    los elementos que estaban al principio)*/
  const [listaComponentes, setListaComponentes] = useState([listaInicial]);

    const valorTextInput = useRef();

  /*Función que añade el elemento y reinicia el estado de la lista para que pueda volver a capturar el valor de la lista*/
  const funcion = function addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteListaClase texto={valorTextInput.current.value} />
    );
    setListaComponentes(newLista);
  };

  //Cuando se pulsa el botón añadir se llama a la función addElement
  return (
    <div>
      {props.titulo} - {props.icono}
      <ul>{listaComponentes}</ul>
      <li>
        <input ref={valorTextInput} type="text" placeholder="Introduce una tarea" />
        <br />
        <button onClick={funcion}>Añadir</button>
      </li>
    </div>
  );
}
