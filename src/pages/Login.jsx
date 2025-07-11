import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import { FiLock, FiEye, FiEyeOff, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [resetEmail, setResetEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validUser = {
      email: 'admin@garden.com',
      password: 'admin123',
    };

    if (form.email === validUser.email && form.password === validUser.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', 'Administrador');
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } else {
      setError('Credenciales incorrectas. Por favor, intentá nuevamente.');
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setShowResetModal(false);
    setResetEmail('');
    alert('Si el correo está registrado, recibirás instrucciones pronto. 🌱');
  };

  return (
    <>
      <div className="login-wrapper d-flex justify-content-center align-items-center">
        <motion.div
          className="login-card shadow-lg p-5 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="The Garden Shop" className="login-logo mb-4" />
          <h2 className="mb-3 text-success">Bienvenido a The Garden Shop</h2>
          <p className="text-muted mb-4">Ingresá tus credenciales para continuar 🌿</p>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">¡Bienvenido/a! Redirigiendo...</div>}

          <form onSubmit={handleSubmit} className="text-start">
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-pill px-3"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4 position-relative">
              <label className="form-label">Contraseña</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-control rounded-pill px-3 pe-5"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary-green rounded-pill d-flex justify-content-center align-items-center gap-2">
                <FiLock />
                Ingresar
              </button>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                className="forgot-link btn btn-link p-0"
                onClick={() => setShowResetModal(true)}
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showResetModal && (
          <motion.div
            className="reset-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResetModal(false)}
          >
            <motion.div
              className="reset-modal p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0 text-success">Recuperar contraseña</h5>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => setShowResetModal(false)}>
                  <FiX />
                </button>
              </div>
              <p className="text-muted mb-3">Ingresá tu email y te enviaremos instrucciones</p>
              <form onSubmit={handleResetSubmit}>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="tu-email@ejemplo.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowResetModal(false)}>Cancelar</button>
                  <button type="submit" className="btn btn-primary-green">Enviar</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default Login;
