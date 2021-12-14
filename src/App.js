import React from 'react';
import './style.css';

import Etiqueta1 from './components/etiqueta1';
import ComponenteEj from './components/componenteEj';

export default function App() {
  return (
    <div>
      <h1>Primer Componente</h1>
      <Etiqueta1 />
      <ComponenteEj titulo="Carita sonriente" icono=":)" />
      <ComponenteEj titulo="Carita triste" icono=":(" />
      <ComponenteEj titulo="Cara plana" icono="-_-" />
    </div>
  );
}