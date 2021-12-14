import React from 'react';

import ComponenteLista from './componenteLista';

export default function ComponenteEj(props) {
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
