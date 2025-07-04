// src/pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
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
      password: 'admin123'
    };

    if (form.email === validUser.email && form.password === validUser.password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', 'Administrador'); // nombre visible
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    }
     else {
      setError('Credenciales incorrectas. Por favor, intentá nuevamente.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 login-card">
        <h2 className="mb-4 text-center">Iniciar sesión</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">¡Bienvenido/a a The Garden Shop! 🌿</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Ingresar
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
