// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/cart.css';
import Footer from '../components/Footer';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="empty-cart">Tu carrito está vacío 🪴</div>;
  }

  return (
    <div className="container cart-container">
      <h2 className="cart-title">🛒 Tu carrito de compras</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>
            Quitar
          </button>
        </div>
      ))}
      <div className="total-price">Total: ${total}</div>
      <div className="cart-buttons">
        <button className="btn btn-secondary" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Ir al checkout
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
