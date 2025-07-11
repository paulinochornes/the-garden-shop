import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiShoppingCart, FiMenu, FiUser } from 'react-icons/fi';
import logo from '../assets/logo.png';
import '../styles/navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const searchRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    const storedName = localStorage.getItem('userName') || 'Usuario';
    if (isLoggedIn) setUserName(storedName);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setShowSearch(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar shadow-sm">
      <div className="container navbar-inner px-3">
        <Link className="navbar-brand d-flex align-items-center me-auto" to="/">
          <img src={logo} alt="The Garden Shop" className="logo-img" />
        </Link>
        <ul className="nav gap-4 d-none d-lg-flex justify-content-center flex-grow-1">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
              Productos
            </span>
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
            <Link className="nav-link" to="/guides">Guías</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/us">Nosotros</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-3 justify-content-end">

          <div ref={searchRef} className="search-container">
            <AnimatePresence>
              {showSearch ? (
                <motion.form
                  className="d-flex align-items-center"
                  onSubmit={handleSearch}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    autoFocus
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ maxWidth: '200px' }}
                  />
                  <button className="btn btn-primary-green btn-sm" type="submit">Buscar</button>
                </motion.form>
              ) : (
                <motion.button
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center"
                  onClick={() => setShowSearch(true)}
                  title="Buscar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FiSearch size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            key={totalItems}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Link className="nav-link position-relative" to="/cart">
              <FiShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {totalItems}
                </span>
              )}
            </Link>
          </motion.div>

          {/* Usuario (desktop) */}
          {userName ? (
            <div ref={dropdownRef} className="nav-item position-relative d-none d-lg-block">
             <div
  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
  role="button"
  onClick={() => setShowDropdown(prev => !prev)}
>
  <FiUser size={18} />
  <span>{userName}</span>
</div>
              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    className="dropdown-menu dropdown-menu-end show"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'block', position: 'absolute', right: 0 }}
                  >
                    <li><Link className="dropdown-item" to="/profile">Perfil</Link></li>
                    <li><Link className="dropdown-item" to="/addresses">Direcciones</Link></li>
                    <li><Link className="dropdown-item" to="/orders">Pedidos</Link></li>
                    <li><Link className="dropdown-item" to="/payments">Métodos de pago</Link></li>
                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Cerrar sesión</button></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link className="nav-link d-none d-lg-block" to="/login">Login</Link>
          )}

          <button
            className="btn btn-outline-secondary d-lg-none"
            onClick={() => setShowMobileMenu(prev => !prev)}
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>


      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="mobile-menu px-3 pt-3 pb-2 d-lg-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="list-unstyled mb-2">
              <li><Link className="nav-link" to="/">Inicio</Link></li>
              <li>
                <span className="nav-link fw-bold">Productos</span>
                <ul className="list-unstyled ps-3">
                  <li><Link className="nav-link" to="/products">Todos</Link></li>
                  <li><Link className="nav-link" to="/products/plantas interior">Plantas de interior</Link></li>
                  <li><Link className="nav-link" to="/products/plantas exterior">Plantas de exterior</Link></li>
                  <li><Link className="nav-link" to="/products/suculentas">Suculentas</Link></li>
                  <li><Link className="nav-link" to="/products/cactus">Cactus</Link></li>
                  <li><Link className="nav-link" to="/products/bonsai">Bonsái</Link></li>
                </ul>
              </li>
              <li><Link className="nav-link" to="/guides">Guías</Link></li>
              <li><Link className="nav-link" to="/us">Nosotros</Link></li>

              {userName ? (
                <>
                  <li><Link className="nav-link" to="/profile">Perfil</Link></li>
                  <li><Link className="nav-link" to="/addresses">Direcciones</Link></li>
                  <li><Link className="nav-link" to="/orders">Pedidos</Link></li>
                  <li><Link className="nav-link" to="/payments">Métodos de pago</Link></li>
                  <li><button className="btn btn-danger btn-sm" onClick={handleLogout}>Cerrar sesión</button></li>
                </>
              ) : (
                <li><Link className="nav-link" to="/login">Login</Link></li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
