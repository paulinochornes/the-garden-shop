import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#EEEFE0', padding: '1rem' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#819a91' }}>
          🌿 The Garden Shop
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Productos
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products">Todos</Link></li>
                <li><Link className="dropdown-item" to="/products/indoor">Plantas de interior</Link></li>
                <li><Link className="dropdown-item" to="/products/outdoor">Plantas de exterior</Link></li>
                <li><Link className="dropdown-item" to="/products/soil">Sustratos</Link></li>
                <li><Link className="dropdown-item" to="/products/tools">Accesorios</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/us">Nosotros</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                🛒 Carrito
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
