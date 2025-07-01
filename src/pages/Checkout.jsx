// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    setTimeout(() => navigate('/'), 4000); // Redirige al Home tras 4 segundos
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Gracias por tu compra, {formData.name}! 💚</h2>
        <p>Te enviaremos un email de confirmación a <strong>{formData.email}</strong>.</p>
        <p>Tu pedido llegará a: {formData.address}</p>
        <p>Redirigiendo al inicio...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Finalizar compra 🧾</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección de envío</label>
          <input type="text" name="address" className="form-control" onChange={handleChange} required />
        </div>
        <h4 className="mt-4">Total a pagar: ${total}</h4>
        <button type="submit" className="btn btn-success mt-3">Confirmar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
