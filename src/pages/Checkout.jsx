// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/cart.css';
import Footer from '../components/Footer';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '', cardNumber: '', expiry: '', cvv: '' });
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Gracias por tu compra, {form.name}! 🪴</h2>
        <p>Te enviaremos la confirmación a {form.email} 🌿</p>
        <Link to="/" className="btn btn-success mt-3">Volver al inicio</Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="cart-title">Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
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
        <div className="col-12">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Sección de pago */}
        <h4 className="mt-4">Información de pago</h4>
        <div className="col-md-6">
          <label className="form-label">Número de tarjeta</label>
          <input
            type="text"
            name="cardNumber"
            className="form-control"
            value={form.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Vencimiento</label>
          <input
            type="text"
            name="expiry"
            placeholder="MM/AA"
            className="form-control"
            value={form.expiry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">CVV</label>
          <input
            type="text"
            name="cvv"
            className="form-control"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 total-price">Total a pagar: ${total}</div>
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-success">
            Confirmar compra
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Checkout;
