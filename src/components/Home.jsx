import React from 'react';

import { Table } from 'react-bootstrap';
import { ElementosTabla } from '../data/ElementosTabla';


export function Home() {
  return (
    <div>
      <h1>Listado de usuarios</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {ElementosTabla.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.usuario}</td>
              </tr>
            );
            })}
        </tbody>
      </Table>
    </div>
  );
}
