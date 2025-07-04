// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const storedName = localStorage.getItem('userName') || 'Usuario';
    if (isLoggedIn) {
      setUserName(storedName);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3 py-2" style={{ backgroundColor: '#EEEFE0' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/" style={{ color: '#819a91' }}>
          <img src={logo} alt="The Garden Shop" className="logo-img me-2" style={{ height: '40px' }} />
          
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Productos</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products">Todos</Link></li>
                <li><Link className="dropdown-item" to="/products/plantas interior">Plantas de interior</Link></li>
                <li><Link className="dropdown-item" to="/products/plantas exterior">Plantas de exterior</Link></li>
                <li><Link className="dropdown-item" to="/products/suculentas">Suculentas</Link></li>
                <li><Link className="dropdown-item" to="/products/cactus">Cactus</Link></li>
                <li><Link className="dropdown-item" to="/products/bonsai">Bonsái</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/us">Nosotros</Link>
            </li>
          </ul>

          <form className="d-none d-md-flex mx-auto" onSubmit={handleSearch} style={{ maxWidth: '400px', width: '100%' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            {userName ? (
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  {userName}
                </span>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">Perfil</Link></li>
                  <li><Link className="dropdown-item" to="/addresses">Direcciones</Link></li>
                  <li><Link className="dropdown-item" to="/orders">Pedidos</Link></li>
                  <li><Link className="dropdown-item" to="/payments">Métodos de pago</Link></li>
                  <li><button className="dropdown-item text-danger" onClick={handleLogout}>Cerrar sesión</button></li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                🛒
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
