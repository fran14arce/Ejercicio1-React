import React from 'react';

import Etiqueta1 from './components/Etiqueta1';
import Lista from './components/Lista';
import ListaClase from './components/ListaClase';
import HeaderClase from './components/HeaderClase';

export default function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  const personas = ['Fran', 'Rubén', 'Nieves', 'Roberto']

  return (
    <div>
      <HeaderClase title="Ejercicio React 1" usuarios={personas}/>
      <ListaClase titulo="Tareas de la casa" icono="😁" elementos={elementos1} />
      <ListaClase titulo="Lista de la compra" icono="😅" elementos={elementos2} />
      <ListaClase titulo="ToDo del curso" icono="🤩" elementos={elementos3} />
    </div>
  );
}
