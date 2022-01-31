import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Usuarios from '../components/Usuarios';
import PelisGhibli from '../components/PelisGhibli';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/Usuarios',
    title: 'Usuarios',
    component: Usuarios,
  },
  {
    id: 4,
    path: '/PelisGhibli',
    title: 'Pelis Ghibli',
    component: PelisGhibli,
  },
];

/*
  path
  id
  title
  component
*/
