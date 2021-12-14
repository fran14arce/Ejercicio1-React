import React from 'react';
import './style.css';

import Etiqueta1 from './components/etiqueta1';
import Lista from './components/lista';

export default function App() {
  let listaElementos = ['elemento 1', 'elemento 2'];

  return (
    <div>
      <h1>Primer Componente</h1>
      <Etiqueta1 />
      <Lista titulo="Carita sonriente" icono=":)" elementos={listaElementos} />
      <Lista titulo="Carita triste" icono=":(" elementos={listaElementos} />
      <Lista titulo="Cara plana" icono="-_-" elementos={listaElementos} />
    </div>
  );
}
