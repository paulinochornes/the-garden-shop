// src/components/UserLayout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/userLayout.css';

function UserLayout({ children }) {
  const { pathname } = useLocation();

  const links = [
    { to: '/profile', label: 'Perfil' },
    { to: '/addresses', label: 'Direcciones' },
    { to: '/payments', label: 'Pagos' },
    { to: '/orders', label: 'Pedidos' },
  ];

  return (
    <div className="user-layout">
      <aside className="user-sidebar">
        <h5 className="sidebar-title">Mi Cuenta</h5>
        <ul className="sidebar-links">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`sidebar-link ${pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" className="sidebar-link logout">Cerrar sesión</Link>
          </li>
        </ul>
      </aside>

      <main className="user-content">
        {/* ⛳️ Aquí va el contenido que no se está viendo */}
        {children}
      </main>
    </div>
  );
}

export default UserLayout;
