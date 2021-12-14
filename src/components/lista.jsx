import React from 'react';

import ComponenteLista from './componenteLista';

export default function Lista(props) {
let listaComponentes = [];

  for (let i = 0; i < props.elementos.length; i++) {
    listaComponentes.push(<ComponenteLista texto={props.elementos[i]} />);
  }

  return (
    <div>
      {props.titulo}
      <ul>
        <ComponenteLista
          texto={'Componente 1: ' + props.titulo + ' ' + props.icono}
        />
        <ComponenteLista
          texto={'Componente 2: ' + props.titulo + ' ' + props.icono}
        />
        <ComponenteLista
          texto={'Componente 3: ' + props.titulo + ' ' + props.icono}
        />
      </ul>
    </div>
  );
}