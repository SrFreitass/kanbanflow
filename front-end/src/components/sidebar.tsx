import React from 'react';
import { NavLink } from 'react-router-dom';
import Bandeira from '../../public/bandeira.svg';
import Tresbarras from '../../public/tresbarras.svg';
import Home from '../../public/home.svg';
import Taskboard from '../../public/taskboard.svg';
import Perfil from '../../public/perfil.svg';

// Tipagem para cada item do menu
interface MenuItem {
  path: string;
  name: string;
  icon: string;
}

const Sidebar: React.FC = () => {
  // Itens do menu
  const menuItems: MenuItem[] = [
    {
      path: '/',
      name: 'Dashboard',
      icon: Bandeira,
    },
    {
      path: '/users',
      name: 'Usuários',
      icon: Tresbarras,
    },
    {
      path: '/home',
      name: 'Home',
      icon: Home,
    },
    {
      path: '/tasks',
      name: 'Tarefas',
      icon: Taskboard,
    },
    {
      path: '/PerfilView',
      name: 'Perfil',
      icon: Perfil,
    },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen bg-[#F8F8F8] w-16">
      {/* Menu */}
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className="flex items-center justify-center p-4 hover:bg-gray-200 transition-colors"
              >
                {({ isActive }) => (
                  <span
                    className={`p-2 rounded-full ${
                      isActive ? 'bg-orange-500' : 'bg-transparent'
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="size-6"
                    />
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export  {Sidebar};