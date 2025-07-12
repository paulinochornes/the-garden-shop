// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/cart.css';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.name.trim() &&
      form.email.includes('@') &&
      form.address.trim() &&
      form.cardNumber.length >= 16 &&
      form.expiry.trim() &&
      form.cvv.length >= 3
    ) {
      setSubmitted(true);
      clearCart();
    } else {
      alert('Por favor completá todos los campos correctamente.');
    }
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
      <h2 className="cart-title mb-4 text-center">Finalizar compra</h2>

      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm p-4">
            <h5 className="mb-3">🧾 Resumen del carrito</h5>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{item.nombre} x {item.quantity}</span>
                  <span>${item.precio * item.quantity}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${total}</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="row g-3">
              <h5 className="mt-2">📋 Datos personales</h5>

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

              <h5 className="mt-4">💳 Información de pago</h5>

              <div className="col-md-6">
                <label className="form-label">Número de tarjeta</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="form-control"
                  maxLength={16}
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
                  maxLength={4}
                  value={form.cvv}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-success mt-3 w-100">
                  Confirmar compra
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
