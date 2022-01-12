import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';
import { MenuItems } from './data/MenuItems';

export function App() {
  return (

    <Router>
      <Header />
      {MenuItems.map((item) => {
        return (
          <Route
          path = {item.path}
          exact
          component = {item.component}
          />
        );
        })}
    </Router>
  );
}